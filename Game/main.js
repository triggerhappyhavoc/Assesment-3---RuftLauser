var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

		// Find the delta time (dt) - the change in time since the last drawFrame
		// We need to modify the delta time to something we can use.
		// We want 1 to represent 1 second, so if the delta is in milliseconds
		// we divide it by 1000 (or multiply by 0.001). This will make our 
		// animations appear at the right speed, though we may need to use
		// some large values to get objects movement and rotation correct
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		// validate that the delta is within range
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

//-------------------- Don't modify anything above here

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;


// some variables to calculate the Frames Per Second (FPS - this tells use
// how fast our game is running, and allows us to make the game run at a 
// constant speed)
var fps = 0;
var fpsCount = 0;
var fpsTime = 0;

// load an image to draw
var chuckNorris = document.createElement("img");
chuckNorris.src = "hero.png";


var tileset = document.createElement("img");
tileset.src = "tileset.png";


function bound(value, min, max)
{
    if(value < min)
        return min;
    if(value > max)
        return max;
    return value;
};

function cellAtPixelCoord(layer, x,y)
{
    if(x<0 || x>SCREEN_WIDTH || y<0)
        return 1;
        //let the player drop
    else if(y>SCREEN_HEIGHT)
        return 0;
    return cellAtTileCoord(layer, p2t(x), p2t(y));
};

function cellAtTileCoord(layer, tx, ty)
{
    if(tx<0 || tx>=MAP.tw || ty<0)
        return 1;
        //let the player drop
    else if(ty>=MAP.th)
        return 0;
    return cells[layer][ty][tx];
};

function tileToPixle(tile)
{
    return tile * TILE;
};

function pixleToTile(pixle)
{
    return Math.floor(pixle/TILE);
};

//GameStates
function runGamesplash(deltaTime)
{
    Splash_timer -=deltaTime
    
    // splash.draw();
    
    //Setting name
    context.fillStyle = "#ffffff";
    context.font= "12px Arial";
    context.fillText("[Insert Names Here]", 2, SCREEN_HEIGHT - 2)
    
    context.fillStyle = "#ffffff";
    context.font = "60px Agency FB";
    context.fillText("[Insert Stuff Here]", SCREEN_WIDTH/2 - 190, SCREEN_HEIGHT/2)
    
    if(Splash_timer <= 0)
    {
        Gamestate = Gamestate_reset;
    }
}
function runGameplay(deltaTime)
{
    
}


function runGamevalreset(deltaTime)
{

}
function runGamedeath(deltaTime)
{
    
}

function runGameWin(deltaTime)
{

}

function runGameover(deltaTime)
{

}
function runGamereset(deltaTime)
{

}

function drawMap()
{
    
}

function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if (y2 + h2 < y1 ||x2 + w2 < x1 || x2 > x1 + w1 || y2 > y1 + h1)
	{
		return false;
	}
	return true;
}

function initialize()
{
    
}

function run()
{
    
}


initialize();

//-------------------- Don't modify anything below here


// This code will set up the framework so that the 'run' function is called 60 times per second.
// We have a some options to fall back on in case the browser doesn't support our preferred method.
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
      _cb();
    };
  } else if (window.mozRequestAnimationFrame) {
    onEachFrame = function(cb) {
      var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
      _cb();
    };
  } else {
    onEachFrame = function(cb) {
      setInterval(cb, 1000 / 60);
    }
  }
  
  window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);
