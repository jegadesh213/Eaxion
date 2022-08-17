const text = document.querySelector('.text p')
let flip_flop=true;

text.innerHTML = text.innerHTML.split("")
.map((char ,i)=>`<span style="transform:rotate(${i*10}deg)">${char}</span>`)
.join("")


const navbar = document.querySelector('.nav-bar')

// fireworks
let auto = false
const m = {x:0, y:0},
      stage = document.querySelector('.stage'),
      toggle = document.querySelector('.toggle')

window.onpointerdown = window.onpointermove = (e)=>{
  m.x = e.clientX
  m.y = e.clientY
}

stage.onpointerup = (e)=>{
  gsap.killTweensOf(autoPlay)
  gsap.killTweensOf(fire)
  auto = true
  toggleAuto()
  fire(m)
}

function fire(m){
  
  const firework = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        trail = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        ring = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        hsl = 'hsl('+gsap.utils.random(0,360,1)+',100%,50%)'
  
  stage.appendChild(firework)
  firework.appendChild(trail)
  firework.appendChild(ring)
  
  for (let i=1; i<5; i++){
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    gsap.set(t, {x:m.x, y:innerHeight, opacity:0.25, attr:{'stroke-width':i, d:'M0,0 0,'+innerHeight}})
    gsap.to(t, {y:m.y, ease:'expo'})// for some reason this can't be combined with the above set() in a fromTo() without generating errors ¯\_(ツ)_/¯
    trail.appendChild(t)    
  }
  
  for (let i=0; i<gsap.utils.random(5,8,1); i++){
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    gsap.set(c, {x:m.x, y:m.y, attr:{class:'core', r:()=>(i+1)*25, fill:'none', stroke:hsl, 'stroke-width':gsap.utils.random(1.5,3.4), 'stroke-dasharray':'1 '+gsap.utils.random(15,30,1)}})
    ring.appendChild(c)
  }
    
  gsap.timeline({onComplete:()=>stage.removeChild(firework)})
    .to(trail.children, {duration:0.2, attr:{d:'M0,0 0,0'}, stagger:-0.08, ease:'expo.inOut'}, 0)
    .to(trail.children, {duration:0.4, scale:()=>gsap.utils.random(40,80,1), attr:{stroke:hsl}, stagger:-0.15, ease:'expo'}, 0.4)
    .to(trail.children, {duration:0.3, opacity:0, ease:'power2.inOut', stagger:-0.1}, 0.5)
    .from(ring.children, {duration:1, scale:0, stagger:0.05, ease:'expo'}, 0.4)
    .to(ring.children, {opacity:0, stagger:0.1, ease:'sine.inOut'}, 0.7)
    .to(ring.children, {duration:1, y:'+=30', ease:'power2.in'}, 0.7)
}

toggle.onpointerup = toggleAuto

function toggleAuto(){
  auto = !auto
  gsap.timeline({defaults:{duration:0.3, ease:'power2.inOut'}})
    .to('.knob', {x:()=>(auto)?18:0}, 0)
    .to('.txt1', {opacity:(i)=>(auto)?0.3:1}, 0)
    .to('.txt2', {opacity:(i)=>(auto)?1:0.3}, 0)
  if (auto) autoPlay()
  else {
    gsap.killTweensOf(autoPlay)
    gsap.killTweensOf(fire)
  }
}

function autoPlay(){
  for (let i=0; i<gsap.utils.random(3,9,1); i++){
    gsap.delayedCall(i/2, fire, [{x:gsap.utils.random(99, innerWidth-99, 1), y:gsap.utils.random(99, innerHeight-99, 1)}])
  }  
  (auto) ? gsap.delayedCall(3.5,autoPlay) : gsap.killTweensOf(autoPlay)
}

toggleAuto()

// fireworks ends 

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
		this.digitsTimeout = setTimeout(this.loop.bind(this),3000);	
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
		let m = hours;
		let s = minutes;

		

		flip_flop=!flip_flop

		const hr=(flip_flop)?"Ds":h;
		const mi=(flip_flop)?"Hr":m;
		const se=(flip_flop)?"Mn":s;
		const ap=(flip_flop)?"To":"Go";

		this.time.a = [...this.time.b];
		this.time.b = [
			hr,mi,se,ap];

		
	}
}
