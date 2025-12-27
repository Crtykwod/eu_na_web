<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { deleteWord, typeWriter } from '$lib/assets/typewriter.svelte';

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	let domTitle: HTMLElement;

	const titles = [`CRTYKWOD`, 'CARTOLA', 'CARLOS S.'];

	$effect(() => {
		const animateTitle = async () => {
			await typeWriter(titles[0], domTitle);
			await sleep(500);
			await deleteWord(domTitle);
			await typeWriter(titles[1], domTitle);
			await sleep(500);
			await deleteWord(domTitle);
			await typeWriter(titles[2], domTitle);
		};

		animateTitle();
	});
</script>

<section class="relative z-10 flex flex-col items-center justify-center min-h-svh text-center px-4">
	<div
		in:fly={{ y: 20, duration: 800, delay: 200, easing: cubicOut }}
		class="relative mb-6 px-4 py-1.5 rounded-md border border-white/10 bg-white/5 backdrop-blur-md"
	>
		<span class="text-xs font-main text-gray-400 tracking-widest uppercase">
			me contrata aí
			<span
				class="ml-2 inline-block w-2 h-2 rounded-full bg-violet-primary shadow-[0_0_10px_#7800ff]"
			></span>
		</span>
	</div>

	<h1
		bind:this={domTitle}
		in:fly={{ y: 30, duration: 1000, delay: 300, easing: cubicOut }}
		class="font-archivo font-bold text-[clamp(3rem,-0.3137rem+13.5948vw,12rem)] text-white mb-6 text-cursor uppercase whitespace-pre-wrap"
		style="text-shadow: 0 0 40px rgba(120, 0, 255, 0.2);"
	>
		<span class="hidden">CARLOS S.</span>
	</h1>

	<p
		in:fly={{ y: 20, duration: 1000, delay: 500, easing: cubicOut }}
		class="text-lg md:text-xl text-white/60 max-w-lg mb-10 font-light leading-relaxed"
	>
		Só deus sabe o que eu to fazendo aqui!!!
	</p>

	<div
		in:fly={{ y: 20, duration: 800, delay: 700, easing: cubicOut }}
		class="flex flex-col sm:flex-row gap-4 w-6/7 justify-center"
	>
		<a
			href="#projetos"
			class="group relative px-8 py-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-violet-primary/50 hover:bg-violet-primary/5 hover:shadow-[0_0_30px_rgba(120,0,255,0.15)]"
		>
			<div
				class="absolute inset-0 bg-linear-to-r from-violet-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
			></div>
			<span
				class="relative font-main font-bold text-sm tracking-wide text-white group-hover:text-[#b066ff]"
			>
				VER PROJETOS
			</span>
		</a>

		<a
			href="#contato"
			class="group px-8 py-4 rounded-lg border border-transparent hover:border-white/10 transition-colors duration-300"
		>
			<span class="font-main text-sm tracking-wide text-gray-400 group-hover:text-white">
				Entrar em contato
			</span>
		</a>
	</div>
</section>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}

  .text-cursor {
    position: relative;
  }

	.text-cursor::after {
		content: '';
    height: 12rem;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-right: min(1em, 1rem);
    border-style: solid;
    margin-left: 0.5rem;
    color: var(--color-violet-primary);
		animation: blink 1.25s step-end infinite;
	}

</style>
