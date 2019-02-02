# LIRI CLI

### Overview
The LIRI CLI will take in a command and an input (artist, song, or movie). The CLI will then return relevant data for that input and log a short message to the console and log.txt. The CLI can be run with multiple commands at once using the random.txt file.

### Installation
1. Clone this repository to your local machine
2. Run "npm -i" to install all dependencies. These include the following:
  - [Axios](https://www.npmjs.com/package/axios)
  - [Moment](https://www.npmjs.com/package/moment)
  - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  - [Dotenv](https://www.npmjs.com/package/dotenv)

```bash
npm -i
```

3. Go to <https://developer.spotify.com/my-applications/#!/> to create your client id and client secret for the Node-Spotify-API
4. Once you have your client id and secret, add them to a .env file with the following content:

```javascript
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

5. That's it! You're ready to roll.

### Searching For Music
You can search for a song's information using the following command:

```bash
node liri.js spotify-this-song <Your Song>
```

This will output the song's information to the console and to the log.txt file.

### Searching For Concerts
You can search for concerts by artist using the following command:

```bash
node liri.js concert-this <Your Artist>
```

This will output the concert's information to the console and to the log.txt file.

### Searching For Movies
You can search for movies by name using the following command:

```bash
node liri.js movie-this <Your Movie>
```

This will output the movie's information to the console and to the log.txt file.

### Searching For Multiple Items
You can search for movies by name using the random.txt file. Just write your commands on separate lines, as you would normally type them into the console.

This will output the movie's information to the console and to the log.txt file.
