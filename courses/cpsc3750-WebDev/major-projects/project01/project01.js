/*
    Name: Kevin Blinn
    Class: CPSC 3750
    Date Due: July 13th, 2024
    Assignment: Project 01 - Audio Changer
*/

// Grab the IDs and assign them to the proper variables
document.addEventListener('DOMContentLoaded', () => {
    let audio = document.getElementById('audio');
    let playPauseBtn = document.getElementById('play-pause');
    let rewindBtn = document.getElementById('rewind');
    let forwardBtn = document.getElementById('forward');
    let currentTimeDisplay = document.getElementById('current-time');
    let playlist = document.getElementById('playlist');
    let addTitleBtn = document.getElementById('add-title');
    let removeTitleBtn = document.getElementById('remove-title');

    // So at least 6 titles at the start to prove I have the min
    let titles = [
        { time: 0, title: 'Play it from the start' },
        { time: 43, title: 'NEVER GONNA GIVE YOU UP' },
        { time: 214, title: 'Start: Second Time!!' },
        { time: 300, title: 'Your HALF WAY through Greatness.' },
        { time: 425, title: 'Start: Third Time!!' },
        { time: 585, title: 'ONE LAST TIME FOR THE PEOPLE IN THE BACK!' }
    ];

    // Initialize some of the variables needed
    let currentTitleIndex = 0;
    let isPlaying = false;
    let timer;

    // Function to format the time
    function formatTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    // Add an Event Listener to update the current title index
    audio.addEventListener('timeupdate', () => {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Toggle for the Play/Pause Button
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playPauseBtn.textContent = 'Play';
        } else {
            audio.play();
            isPlaying = true;
            playPauseBtn.textContent = 'Pause';
        }
    });

    // Add an Event Listener to rewind the audio by 5 seconds
    rewindBtn.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    // Add an Event Listener to fast forward the audio by 5 seconds
    forwardBtn.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    });

    // Function to update the playlist
    function updatePlaylist() {
        playlist.innerHTML = '';
        titles.forEach((item, index) => {
            let button = document.createElement('button');
            button.textContent = item.title;
            button.addEventListener('click', () => playSegment(index));
            playlist.appendChild(button);
        });
    }

    // Function to play a segment of the audio
    function playSegment(index) {
        // Get the start time of the segment
        let startTime = titles[index].time;

        // Get the end time of the segment
        let endTime = index < titles.length - 1 ? titles[index + 1].time : audio.duration;
        
        // Set the current audio time to the start time of the segment
        audio.currentTime = startTime;
        audio.play();
        isPlaying = true;
        playPauseBtn.textContent = 'Pause';
        clearInterval(timer);

        // Adjust the current time display and pause when you end the segment
        timer = setInterval(() => {
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
            if (audio.currentTime >= endTime) {
                clearInterval(timer);
                audio.pause();
                isPlaying = false;
                playPauseBtn.textContent = 'Play';
            }
        }, 500);
    }

    // Add an Event Listener to add a title to the playlist
    addTitleBtn.addEventListener('click', () => {
        // Prompt the user to enter a title
        let title = prompt('Enter the title:');

        // If the user entered a title, add it to the playlist
        if (title) {
            let time = audio.currentTime;
            titles.push({time, title});
            titles.sort((a, b) => a.time - b.time);
            updatePlaylist();
        }
    });

    // Add an Event Listener to remove a title from the playlist
    removeTitleBtn.addEventListener('click', () => {
        if (currentTitleIndex >= 0 && currentTitleIndex < titles.length) {
            titles.splice(currentTitleIndex, 1);
            updatePlaylist();
        }
    });

    updatePlaylist();
});
