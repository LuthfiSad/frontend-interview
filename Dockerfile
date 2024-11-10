# Menggunakan Node.js versi 20 sebagai image dasar
FROM node:20

# Menentukan direktori kerja dalam container
WORKDIR /app

# Menyalin file package.json dan yarn.lock ke dalam container
COPY package.json yarn.lock ./

# Menginstal dependensi
RUN yarn install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Membuild aplikasi untuk produksi
RUN yarn build

# Mengekspos port yang digunakan oleh aplikasi (port 5173 untuk Vite)
EXPOSE 5173

# Menjalankan aplikasi dalam mode preview
CMD ["yarn", "preview", "--host", "0.0.0.0"]