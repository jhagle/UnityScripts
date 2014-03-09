var blood : GameObject;
var restartDelay : int;
var imagePlane : GameObject;

var splatSound : AudioSource;
var waWaWaSound : AudioSource;

function Kill()
{
	splatSound.Play();
	Instantiate(blood, transform.position, transform.rotation);
	//Destroy(this.gameObject);
	waWaWaSound.Play();
	imagePlane.renderer.enabled = false;
	this.gameObject.collider.enabled = false;
	this.gameObject.GetComponent(PlayerMovementScript).isDead = true;
	yield WaitForSeconds(restartDelay);
	Application.LoadLevel(1); //auto restart level after amount of seconds set in inspector
}