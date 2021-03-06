## History Mapped
A website to help with visualizing the context around ancient famous historical battles. YouTube videos depicting battles placed on a timeline and map.

#### Getting Started
* Clone the repository
* `$ npm install` to install dependencies
* `$ npm start` to run the server on port 3000

### Deployment
`$ npm run deploy` to an `s3` bucket. Details in the `package.json`.

### Adding Videos
Add a video to `src/moments/moments.json` or the authors respective `json`

```
{
  "date": "0000-01-01T12:00:00.000Z",
  "youtubeId": "",
  "title": "",
  "author": "",
  "wikipedia": "",
  "location": {
    "lat": 0,
    "lng": 0
  },
  "dateAdded": "2000-01-01"
}
```

### Contributing
Improvements are welcome, just create a pull request. Below are some requested features and bugs.

- [x] Simultaneous Horizontal and vertical scroll to accommodate trackpads.
- [x] Remember watched videos
- [x] Notifications for new videos
- [x] Mobile design
- [ ] Add Kings and Generals YouTube channel battles
- [x] Add HistoryMarche YouTube channel battles
- [ ] Night mooooooode

### Stack
* reactjs
* create-react-app
* mapbox-gl for the map
