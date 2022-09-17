import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const t1 = gsap.timeline();
t1.fromTo('.site-hero__container', { x: -30 }, { x: 0 });
t1.fromTo('.site-about__container', { x: 30 }, { x: 0 });
t1.fromTo('.site-projects__list', { x: -30 }, { x: 0 });
t1.fromTo('.contacts-left', { x: -30 }, { x: 0 });
t1.fromTo('.contacts-right', { x: 30 }, { x: 0 });
t1.fromTo('.site-footer', { x: -30 }, { x: 0 });

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  animation: t1,
  trigger: '.html',
  start: 'top top',
  end: 'bottom',
  scrub: 'true',
  pin: 'true',
});
