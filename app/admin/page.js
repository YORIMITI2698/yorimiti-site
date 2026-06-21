'use client'

import { useEffect, useRef, useState } from 'react'

const todayYM = () => {
  const d = new Date()
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}

export default function Admin() {
  const [date, setDate] = useState(todayYM())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [link, setLink] = useState('')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [items, setItems] = useState([])
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)
  const fileRef = useRef(null)

  const load = () => fetch('/api/news', { cache: 'no-store' }).then((r) => r.json()).then((d) => setItems(d.items || [])).catch(() => {})
  useEffect(() => { load() }, [])

  const pick = (f) => {
    if (!f) return
    setFile(f)
    const rd = new FileReader()
    rd.onload = () => setPreview(rd.result)
    rd.readAsDataURL(f)
  }

  const submit = async () => {
    if (!title && !body) { setMsg('タイトルか本文を入力してください'); return }
    setBusy(true); setMsg('追加中…')
    let imageBase64 = '', imageName = ''
    if (file) {
      imageBase64 = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(file) })
      imageName = file.name
    }
    const r = await fetch('/api/news-add', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, title, body, link, imageBase64, imageName }),
    })
    const d = await r.json()
    setBusy(false)
    if (d.ok) {
      setMsg('追加しました ✓')
      setTitle(''); setBody(''); setLink(''); setFile(null); setPreview(''); if (fileRef.current) fileRef.current.value = ''
      load()
    } else setMsg('エラー: ' + (d.error || '失敗'))
  }

  const del = async (index) => {
    if (!confirm('この記事を削除しますか？')) return
    const r = await fetch('/api/news-delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ index }) })
    const d = await r.json()
    if (d.ok) load(); else setMsg('削除エラー: ' + (d.error || ''))
  }

  const publish = async () => {
    if (!confirm('変更をサイトに公開（デプロイ）しますか？')) return
    setBusy(true); setMsg('公開中…（git push）')
    const r = await fetch('/api/publish', { method: 'POST' })
    const d = await r.json()
    setBusy(false)
    setMsg(d.ok ? '公開しました ✓ Vercelが反映します（1〜2分）' : '公開エラー:\n' + (d.output || d.error))
  }

  const L = { maxWidth: 720, margin: '0 auto', padding: '32px 20px', fontFamily: 'system-ui, sans-serif', color: '#2a2723' }
  const inp = { width: '100%', padding: '10px 12px', border: '1px solid #d9d1c0', borderRadius: 6, fontSize: 14, marginTop: 4, boxSizing: 'border-box' }
  const lab = { fontSize: 12, color: '#79715f', marginTop: 16, display: 'block' }
  const btn = { background: '#6b8e0f', color: '#fff', border: 0, borderRadius: 6, padding: '10px 18px', fontSize: 14, cursor: 'pointer' }

  return (
    <div style={{ background: '#f6f2e8', minHeight: '100vh' }}>
      <div style={L}>
        <h1 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '0.1em' }}>NEWS 管理ツール</h1>
        <p style={{ fontSize: 12, color: '#79715f' }}>画像とテキストを入れて「追加」→ 確認 → 「公開」でサイトに反映されます。</p>

        <div style={{ background: '#fff', border: '1px solid #d9d1c0', borderRadius: 8, padding: 20, marginTop: 16 }}>
          <label style={lab}>日付</label>
          <input style={inp} value={date} onChange={(e) => setDate(e.target.value)} placeholder="2026.06" />
          <label style={lab}>タイトル</label>
          <input style={inp} value={title} onChange={(e) => setTitle(e.target.value)} />
          <label style={lab}>本文</label>
          <textarea style={{ ...inp, minHeight: 100 }} value={body} onChange={(e) => setBody(e.target.value)} />
          <label style={lab}>リンク（任意）</label>
          <input style={inp} value={link} onChange={(e) => setLink(e.target.value)} placeholder="https://..." />

          <label style={lab}>画像</label>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files?.[0]) }}
            onClick={() => fileRef.current?.click()}
            style={{ border: '2px dashed #d9d1c0', borderRadius: 8, padding: 16, textAlign: 'center', cursor: 'pointer', marginTop: 4 }}
          >
            {preview ? <img src={preview} alt="" style={{ maxWidth: '100%', maxHeight: 220, borderRadius: 6 }} />
              : <span style={{ fontSize: 13, color: '#9aa0a6' }}>画像をドラッグ、またはクリックして選択</span>}
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(e.target.files?.[0])} />
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button style={btn} disabled={busy} onClick={submit}>追加</button>
            <button style={{ ...btn, background: '#c2451f' }} disabled={busy} onClick={publish}>サイトに公開</button>
            <span style={{ fontSize: 12, color: '#79715f', whiteSpace: 'pre-line' }}>{msg}</span>
          </div>
        </div>

        <h2 style={{ fontSize: 16, fontWeight: 500, marginTop: 32 }}>掲載中の記事（{items.length}）</h2>
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((n, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #d9d1c0', borderRadius: 8, padding: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              {n.image ? <img src={n.image} alt="" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 6, flexShrink: 0 }} /> : <div style={{ width: 72, height: 72, background: '#ede7d8', borderRadius: 6, flexShrink: 0 }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: '#c2451f', letterSpacing: '0.15em' }}>{n.date}</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{n.title}</div>
                <div style={{ fontSize: 12, color: '#79715f', whiteSpace: 'pre-line', maxHeight: 60, overflow: 'hidden' }}>{n.body}</div>
              </div>
              <button onClick={() => del(i)} style={{ background: 'none', border: '1px solid #d9d1c0', borderRadius: 6, padding: '4px 10px', fontSize: 12, cursor: 'pointer', color: '#c2451f' }}>削除</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
