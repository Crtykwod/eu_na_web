<script lang="ts">
	import { Spring } from 'svelte/motion';

	const MOVEMENT_FACTOR = 0.05;

	let innerHeight = $state(0);
	let innerWidth = $state(0);

	let coords = new Spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.9
		}
	);

	function handleMouseMove(e: MouseEvent) {
		const centerX = innerWidth / 2;
		const centerY = innerHeight / 2;

		const deltaX = e.clientX - centerX;
		const deltaY = e.clientY - centerY;

		const moveX = deltaX * MOVEMENT_FACTOR;
		const moveY = deltaY * MOVEMENT_FACTOR;

		coords.target = {
			x: moveX,
			y: moveY
		};
	}
</script>

<svelte:window bind:innerWidth bind:innerHeight onmousemove={handleMouseMove} />

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
	<div
		class="bg-violet-primary/20 rounded-full size-[45vw] blur-[100px] mix-blend-screen absolute will-change-transform top-1/2 left-1/2"
		style="transform: translate(-50%, -50%) translate({coords.current.x * 0.5}px, {-coords.current.y * 0.5}px);"
	></div>

	<div
		class="bg-[#4c00a4]/35 rounded-full size-[30vw] blur-[90px] mix-blend-screen absolute will-change-transform top-1/2 left-1/2"
		style="transform: translate(-50%, -50%) translate({coords.current.x * 4.5}px, {coords.current.y * 4.5}px);"
	></div>

  <div
		class="bg-[#b066ff]/25 rounded-full size-[15vw] blur-[60px] mix-blend-screen absolute will-change-transform top-1/2 left-1/2"
		style="transform: translate(15%, -80%) translate({coords.current.x * -3}px, {coords.current.y * -3}px);"
	></div>

  <div class="absolute noise-overlay mix-blend-overlay"></div>
</div>

<style>
  .noise-overlay {
    background-image: url(/utils/noise.png);
    pointer-events: none;
    opacity: 0.05;
    inset: 0;
  }
</style>
