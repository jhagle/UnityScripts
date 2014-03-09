var cameraMoving : boolean;
var xpos : float;
var moveSpeed : int;
var moveDistance : int;

var music : AudioSource;
var ambiant : AudioSource;

function Start() {
	
	music.Play();
	ambiant.Play();
}

function Update () {

	if(cameraMoving)
	{
		if(transform.position.x - xpos < moveDistance)
		{
			transform.Translate(Vector3.right * moveSpeed * Time.deltaTime);
		}
		else
		{
			cameraMoving = false;
		}
		
	}

}

function MoveCamera()
{
	cameraMoving = true;
	xpos = transform.position.x;
}