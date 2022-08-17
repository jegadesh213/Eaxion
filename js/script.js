const text = document.querySelector('.text p')
let flip_flop=true;

text.innerHTML = text.innerHTML.split("")
.map((char ,i)=>`<span style="transform:rotate(${i*10}deg)">${char}</span>`)
.join("")


const navbar = document.querySelector('.nav-bar')


gsap.from(navbar.children , {
    duration:1,
    delay:.5,
    opacity:0,
    y:50,
    stagger:{
        amount:.4,
    }
})


gsap.from('.side-one h1' , {
    x:-200,
    skewX:65,
    opacity:0,
    duration:1,
    delay:1,
    stagger:{
        amount:.4
    }
})


gsap.from('.skew' ,{
    duration:1,
    delay:.5,
    opacity:0,
    y:50,
    stagger:{
        amount:.4
    }
})

gsap.from('.statistic' , {
    delay:2,
    autoAlpha:0,
    stagger:
        .10
    
})


gsap.fromTo('.circle-text' ,{
    opacity:0,
    scale:0,
    rotation:400
}, {
    duration:1,
    delay:2, 
    opacity:1,
    scale:1, rotation:0
})


window.addEventListener("DOMContentLoaded",() => {
	const clock = new BouncyBlockClock(".clock");
});

class BouncyBlockClock {
	constructor(qs) {
		this.el = document.querySelector(qs);
		this.time = { a: [], b: [] };
		this.rollClass = "clock__block--bounce";
		this.digitsTimeout = null;
		this.rollTimeout = null;
		this.mod = 0 * 60 * 1000;

		this.loop();
	}
	animateDigits() {
		const groups = this.el.querySelectorAll("[data-time-group]");

		Array.from(groups).forEach((group,i) => {
			const { a, b } = this.time;

			if (a[i] !== b[i]) group.classList.add(this.rollClass);
		});

		clearTimeout(this.rollTimeout);
		this.rollTimeout = setTimeout(this.removeAnimations.bind(this),900);
	}
	displayTime() {
		// screen reader time
		const timeDigits = [...this.time.b];
		const ap = timeDigits.pop();

		this.el.ariaLabel = `${timeDigits.join(":")} ${ap}`;

		// displayed time
		Object.keys(this.time).forEach(letter => {
			const letterEls = this.el.querySelectorAll(`[data-time="${letter}"]`);

			Array.from(letterEls).forEach((el,i) => {
				el.textContent = this.time[letter][i];
			});
		});
	}
	loop() {
		this.updateTime();
		this.displayTime();
		this.animateDigits();
		this.tick();
	}
	removeAnimations() {
		const groups = this.el.querySelectorAll("[data-time-group]");
	
		Array.from(groups).forEach(group => {
			group.classList.remove(this.rollClass);
		});
	}
	tick() {
		clearTimeout(this.digitsTimeout);
		this.digitsTimeout = setTimeout(this.loop.bind(this),1e3);	
	}
	updateTime() {
		const rawDate = new Date();

		var today = new Date();
		let target = new Date("September 17, 2022");

		let date_future = target.getTime();
		let date_now = today.getTime();
		var delta = Math.abs(date_future - date_now) / 1000;

		var days = Math.floor(delta / 86400);
		delta -= days * 86400;

		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
		var seconds = delta % 60;

		console.log(days+" Days"+hours+" Hours"+minutes+" Minutes");


		const date = new Date(Math.ceil(rawDate.getTime() / 1e3) * 1e3 + this.mod);
		let h = days;
		const m = hours;
		const s = minutes;

		flip_flop=!flip_flop
		const ap=(flip_flop)?"To":"Go";

		this.time.a = [...this.time.b];
		this.time.b = [
			h,m,s,ap];

	}
}
