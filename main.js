const generateRandomCommand = () => {
    const commands = [' cd', ' mkdir nomDuDossier', ' touch nomDuFichier', ' >', ' grep', ' ls -l /usr/bin > ls-output.txt', ' grep -n', ' grep -i', ' grep | less', ' grep -v "hello" g1', ' grep -ni "world" g1'];
    const randomIndex = Math.floor(Math.random() * commands.length);
    return commands[randomIndex];
}
const commandElement = document.getElementById("command")
setInterval(() => {
    commandElement.innerText = generateRandomCommand();

}, 2480);