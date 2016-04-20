var base = "this is f1 in global namespace";
var x = "x in the flobal namespace";
var f2 = function(){
    console.log("this is f2");
};

var f1= {
    x : "sumpin in the f1 namespace",
    f2:f2,
    f3:f2,
    f : function(){
	console.log("class func");
	console.log("x is " + x);
	console.log("f1.x is " + f1.x);
	console.log("this is a bettter way: " + this.x);
	
    }
};

function makeIncremeneter(){
    var y = 0;
    return function() {y =y + 1; return y};
}

var wat = makeIncremeneter();

function makeAdder(y){
    return function(n) {return y + n};
}

var addr = makeAdder();

var makeCounter = function(){
    var i = 0;
    var get = function(){return i;};
    var set = function(n){i = n;};
    var inc = function(){i++;};
    var dec = function(){i--;};
    var setX = function(newX){this.x = newX;};
    var getX = function(){return this.x;};
    return {
	x   : "test",
	inc : inc,
	dec : dec,
	get : get,
	set : set,
	setX : setX,
	getX : getX
    };
};


//next chore
