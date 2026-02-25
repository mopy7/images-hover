# 🖼️ Image Hover Slideshow

A simple JavaScript DOM project that dynamically changes images using mouse events.

This project demonstrates DOM manipulation, event handling, state management, and array-based image cycling.

---

## 🚀 Features

- Image changes on `mouseover`
- Image changes again on `mouseout`
- Cycles through multiple images
- Uses array + index logic
- Clean separation of HTML, CSS, and JavaScript

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── images/
    ├── 1.avif
    ├── 2.jpg
    ├── 3.jpg
    └── 4.jpg
```

---

## 🧠 How It Works

### 1️⃣ Select Image Element

```javascript
const image = document.querySelector("#image");
```

### 2️⃣ Store Image Paths in an Array

```javascript
const images = [
  "./images/1.avif",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
];
```

### 3️⃣ Track Current Image Index

```javascript
let currentIndex = 0;
```

### 4️⃣ Update Image on Mouse Events

```javascript
image.addEventListener("mouseover", function () {
  currentIndex++;

  if (currentIndex >= images.length) currentIndex = 0;

  this.src = images[currentIndex];
});
```

The index resets to `0` when it reaches the end of the array, creating a continuous loop.

---

## 🎯 Concepts Practiced

- `querySelector()`
- `addEventListener()`
- `mouseover` & `mouseout`
- Arrays
- Index tracking (state)
- Conditional logic
- Dynamic `src` updates

---

## 🔮 Future Improvements

- Add smooth fade animation
- Convert to automatic slider using `setInterval`
- Add next/previous buttons
- Pause on hover
- Add navigation dots

---

## 📌 Author

Built while mastering JavaScript DOM fundamentals.

> Miles to go before I sleep...