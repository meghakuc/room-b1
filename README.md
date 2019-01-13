This sample shows how to create a React application. In this application we are booking rooms and and according selecting persons who can stay in those rooms.

![](app/img/react.png)

## Demo

```bash
$ git clone https://github.com/meghakuc/room-b1.git
$ cd room-book-app && npm install
$ npm start
$ open http://127.0.0.1:3000
```

Now, you visit http://127.0.0.1:3000/, and should see a room book app.

![](src/img/demo.png)

There are following places to test.

> 1. Initial state of Rooms, Adults and Children should be 0.
> 1. Decrease(-) button is disabled for Rooms, Adults and Children. 
> 1. Increase(+) button is enabled for Rooms, Adults and Children. 
> 1. Click (+) button on "Rooms", Adult count should also increase and its count should equal to room count. Child count will remain 0.
> 1. Click on (+) button on "Rooms". Decrease(-) button should be disabled.
> 1. Click on (+) button on "Rooms". Once room count will reach its max point 5, Increase(+) button should be disabled.
> 1. Click on (-) button on "Rooms". If room count is equals to adult count, room count and adult count should be decrease one point.
> 1. 
> 1. 
> 1. 
