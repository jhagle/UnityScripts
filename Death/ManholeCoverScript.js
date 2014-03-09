var activated : boolean;
var pointA : Vector3;
var pointB : Vector3;
 
 var manholeSound : AudioSource;
 
function Start () {
    var pointA = transform.position;
    //while (true) {
    //    yield MoveObject( pointA, pointB, 3.0);
    //    yield MoveObject( pointB, pointA, 3.0); 
    //}
}
 
function Activate()
{
	if(!activated)
	{
		print("manhole cover down!");
		//transform.position = Vector3(2.7,.34,0);
		manholeSound.Play();
		activated = true;
		MoveObject( transform.position, pointB, 3.0);
	}
	else
	{
		print("manhole cover up!");
		//transform.position = Vector3(2.7,.34,0);
		manholeSound.Play();
		activated = false;
		MoveObject( transform.position, pointA, 3.0);
	}
} 
 
function MoveObject ( startPos : Vector3, endPos : Vector3, time : float) 
{
    //while(activated){
    var i = 0.0;
    var rate = 7.0/time;
    while (i < 1.0) {
   
        i += Time.deltaTime * rate;
        transform.position = Vector3.Lerp(startPos, endPos, i);
        yield;
        //activated = false;
        }
    //}
}