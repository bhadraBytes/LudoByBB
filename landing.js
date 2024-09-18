document.addEventListener('DOMContentLoaded', () => {
    const singlePlayerBtn = document.getElementById('single-player');
    const multiplayerBtn = document.getElementById('multiplayer');
    const createRoomBtn = document.getElementById('create-room');
    const joinRoomBtn = document.getElementById('join-room');
    const backMultiplayerBtn = document.getElementById('back-multiplayer');
    const backRoomBtn = document.getElementById('back-room');
    const backJoinBtn = document.getElementById('back-join');
    const twoPlayersBtn = document.getElementById('two-players');
    const threePlayersBtn = document.getElementById('three-players');
    const fourPlayersBtn = document.getElementById('four-players');
    const backOptionsBtn = document.getElementById('back-options');

    const mainButtons = document.getElementById('main-buttons');
    const multiplayerOptions = document.getElementById('multiplayer-options');
    const roomCode = document.getElementById('room-code');
    const joinForm = document.getElementById('join-form');
    const playerOptions = document.getElementById('player-options');

    singlePlayerBtn.addEventListener('click', () => {
        mainButtons.classList.remove('active');
        playerOptions.classList.add('active');
    });

    multiplayerBtn.addEventListener('click', () => {
        mainButtons.classList.remove('active');
        multiplayerOptions.classList.add('active');
    });

    createRoomBtn.addEventListener('click', () => {
        const code = generateRoomCode();
        document.getElementById('code-display').textContent = code;
        multiplayerOptions.classList.remove('active');
        roomCode.classList.add('active');
    });

    joinRoomBtn.addEventListener('click', () => {
        multiplayerOptions.classList.remove('active');
        joinForm.classList.add('active');
    });

    backMultiplayerBtn.addEventListener('click', () => {
        multiplayerOptions.classList.remove('active');
        mainButtons.classList.add('active');
    });

    backRoomBtn.addEventListener('click', () => {
        roomCode.classList.remove('active');
        multiplayerOptions.classList.add('active');
    });

    backJoinBtn.addEventListener('click', () => {
        joinForm.classList.remove('active');
        multiplayerOptions.classList.add('active');
    });

    backOptionsBtn.addEventListener('click', () => {
        playerOptions.classList.remove('active');
        mainButtons.classList.add('active');
    });

    twoPlayersBtn.addEventListener('click', () => {
        window.location.href = 'index.html?players=2';
    });

    threePlayersBtn.addEventListener('click', () => {
        window.location.href = 'index.html?players=3';
    });

    fourPlayersBtn.addEventListener('click', () => {
        window.location.href = 'index.html?players=4';
    });

    function generateRoomCode() {
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }
});
