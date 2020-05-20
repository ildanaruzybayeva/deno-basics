//deno run --allow-write --allow-read createFile.ts

const encoder = new TextEncoder();
const greetText = encoder.encode("hello peeps");
await Deno.writeFile("greet.txt", greetText);

const file = await Deno.open("greet.txt");
await Deno.copy(file, Deno.stdout);
file.close();
