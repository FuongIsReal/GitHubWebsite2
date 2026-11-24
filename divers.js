// Hai thợ lặn bơi trong bể: đi ngang và nhấp nhô lên xuống nhẹ như đang bơi
const diverRed = document.querySelector('.diver_red');
const diverBlue = document.querySelector('.diver_blue');

const divers = [
  { el: diverRed,  x: 200, baseY: 150, vx: 1.6, vy: 0.4, t: 0, w: 200, h: 100 },
  { el: diverBlue, x: 900, baseY: 380, vx: -1.2, vy: -0.3, t: Math.PI, w: 200, h: 100 }
];

function boiThoLan() {
  divers.forEach(function (d) {
    // Đi ngang, chạm mép thì quay đầu
    d.x += d.vx;
    if (d.x + d.w > window.innerWidth || d.x < 0) {
      d.vx *= -1;
    }

    // Trôi lên xuống chậm, chạm đáy hoặc đỉnh thì đổi hướng
    d.baseY += d.vy;
    if (d.baseY + d.h > window.innerHeight || d.baseY < 0) {
      d.vy *= -1;
    }

    // Nhịp bơi: dao động lên xuống quanh vị trí nền
    d.t += 0.04;
    const y = d.baseY + Math.sin(d.t) * 18;

    // Quay mặt theo chiều đang bơi (ảnh gốc quay mặt sang phải)
    d.el.style.transform = d.vx > 0 ? 'scaleX(1)' : 'scaleX(-1)';
    d.el.style.left = d.x + 'px';
    d.el.style.top = y + 'px';
  });

  requestAnimationFrame(boiThoLan);
}

boiThoLan();
