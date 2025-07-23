const form = document.getElementById('form');
const list = document.getElementById('list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const email = document.getElementById('email').value;

  const res = await fetch('http://localhost:3000/api/mahasiswa', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ nama, nim, email })
  });
  const data = await res.json();
  render();
  form.reset();
});

async function render() {
  list.innerHTML = '';
  const res = await fetch('http://localhost:3000/api/mahasiswa');
  const mahasiswa = await res.json();
  mahasiswa.forEach(m => {
    const item = document.createElement('li');
    item.className = "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `${m.nama} (${m.nim}) - ${m.email}
      <button class="btn btn-danger btn-sm" onclick="hapus(${m.id})">Hapus</button>`;
    list.appendChild(item);
  });
}

async function hapus(id) {
  await fetch('http://localhost:3000/api/mahasiswa/' + id, { method: 'DELETE' });
  render();
}

render();
