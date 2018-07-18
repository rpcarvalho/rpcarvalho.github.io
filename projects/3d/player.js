
function isWhite(color){
	return color[0]==255 | color[1]==255 | color[2]==255;
}

function isWall(x,y,s){
	temp = c2d.get(x-s/2-1,y-s/2-1,s+2,s+2);
	temp.loadPixels();
	for(var i = 0; i<temp.pixels.length; i+=4)
		if(temp.pixels[i] == temp.pixels[i+1] & temp.pixels[i] == temp.pixels[i+2] & temp.pixels[i] != 0)
			return 1;
	return 0;
}

function Player(){
	this.x = 50;
	this.y = 50;
	this.r = PI/2;
	this.size = 10;
	this.b;
	
	this.show = function(){
		c2d.fill(0,100,255);
		c2d.ellipse(this.x,this.y,this.size);
		c2d.fill(255,0,0);
		c2d.ellipse(this.x+this.size/3*cos(this.r),this.y-this.size/3*sin(this.r),this.size/3);
		
		if(this.b != undefined)
			this.b.show();
	}
	
	this.update = function(){
		this.move();
		this.shoot();
	}
	
	this.move = function(){
		var x, y;
		
		if(keyIsDown(LEFT_ARROW))
			this.r += 0.1;
		else if (keyIsDown(RIGHT_ARROW))
			this.r -= 0.1;
		if (keyIsDown(UP_ARROW)){
			x = int(this.x + cos(this.r));
			y = int(this.y - sin(this.r));
			
			if(isWall(x,y,this.size));
			else{
				this.x += cos(this.r);
				this.y -= sin(this.r);
			}
		}
		else if (keyIsDown(DOWN_ARROW)){
			x = int(this.x - cos(this.r));
			y = int(this.y + sin(this.r));
			
			if(isWall(x,y,this.size));
			else{
				this.x -= cos(this.r);
				this.y += sin(this.r);
			}
		}
	}
	
	this.shoot = function(){
		if(this.b != undefined){
			this.b.update();
			if(this.b.d > 100)
				delete this.b;
		}
		else if (keyIsDown(32)){
			this.b = new Bullet(this.x,this.y,this.r);
		}
		
	}
	
	this.see = function(){
		var hit=color(0);
		var i = 0;
		var res= 15;
		var offres = int(res-res/2);
		
		c2d.loadPixels();
		var off;
		var components;
		var x, y;
		var actors = [];
	
		
		
		
		for(var j=-offres; j<=offres; j++){
			var xp = cos(this.r + j*0.05);
			var yp = sin(this.r + j*0.05);
			
			for(i=6; i<100; i+=1){
				x=int(this.x+i*xp);
				y=int(this.y-i*yp);
				if(x<0 | y<0 | x>250 | y>250)
					break;
				off = (y*250 + x)* 4; 
				hit = [ c2d.pixels[off], c2d.pixels[off + 1], c2d.pixels[off + 2], c2d.pixels[off + 3] ];
				//c2d.stroke(200,0,0);
				//c2d.point(x,y);
				if(hit[0] | hit[1] | hit[2]){
					if(hit[0] == hit[1] & hit[0] == hit[2] & hit[0] != 0)
						break;
					else {
						var ac = new Actor(i,j,hit);
						actors.push(ac);
					}
						
				}
			}
			
			
			//draw 3d.
			hit[0] = int(hit[0]*(100-i)*0.01);
			hit[1] = int(hit[1]*(100-i)*0.01);
			hit[2] = int(hit[2]*(100-i)*0.01);
			if(i>83) i=83;
			
			c3d.fill(hit);			
			c3d.noStroke();
			
			c3d.rect(250/res*(-j+offres)-1,0+i*1.5,250/res+1,250-i*3);
		}
		for(i=0; i<actors.length; i++){
			if(actors[i].i > 40 || (actors[i].j == 0)){
				c3d.fill(255,0,255);
				//c3d.ellipse(actor[1]+offres,250/2,20,20);
				//c3d.ellipse(50,50/2,20,20);
				c3d.ellipse(250/res*(-actors[i].j+offres)-1,250/2,100-actors[i].i,100-actors[i].i);
			}
		}
	}
}

function Actor(i,j,c){
	this.i=i;
	this.j=j;
	this.c=c;
}
function Bullet(x,y,r){
	this.x = x + 6*cos(r);
	this.y = y - 6*sin(r);
	this.r = r;
	this.v = 1;
	this.d = 0;
	
	this.update = function(){
		this.x = this.x + this.v*cos(this.r);
		this.y = this.y - this.v*sin(this.r);
		this.d += this.v;
		var hit = mapa.get(this.x,this.y);
		if(hit[0] == hit[1] & hit[0] == hit[2] & hit[0] != 0){

			mapa.fill(0);
			mapa.noStroke();
			mapa.rect(this.x-3,this.y-3,6,6);
			this.d = 101;
			//noLoop();
		}
	}
	
	this.show = function(){
		c2d.fill(255,0,0);
		
		c2d.ellipse(this.x,this.y,4*this.d/100,4*this.d/100);
	}
}