const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function typeWriter(input: string, target: HTMLElement, speed: number = 180) {
	for (let i = 0; i < input.length; i++) {
    if (i === 0 && target.textContent === input.charAt(i)) continue;
		target.innerText += input.charAt(i);
		await sleep(speed);
	}
}

export async function deleteWord(target: HTMLElement, speed: number = 180) {
	while (target.innerText.length > 1) {
		target.innerText = target.innerText.slice(0, -1);
		await sleep(speed);
	}
}
