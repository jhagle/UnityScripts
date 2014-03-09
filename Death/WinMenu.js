@script ExecuteInEditMode()

var guiSkin :GUISkin;
var gameSceneName :String;

private var textAreaString :String = "";
private var isLoading :boolean = false;
private var isWebPlayer :boolean = false;

var music : AudioSource;

function Start()
{
	music.Play();
}

function OnGUI () {
	if(guiSkin)
	{
	GUI.skin = guiSkin;
	}
	
	else
	{
	Debug.Log("Menu: GUI SKin object is missing!");
	}
	
	GUI.Button(Rect((Screen.width/2), Screen.height - 140, 160, 20),"You win!" );
	
	if(GUI.Button(Rect((Screen.width/2), Screen.height - 110, 160, 70),"Play again" ))
	{
		isLoading = true;
		Application.LoadLevel(gameSceneName);
	}

	isWebPlayer = (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer);
	if (!isWebPlayer)
	{
		if(GUI.Button(Rect((Screen.width/2), Screen.height - 80, 160, 120), "Quit" ))
		{
			Application.Quit();
		}
	}
	
	if(isLoading)
	{
		GUI.Label(Rect(5, (Screen.height) - 20, 400, 70), "Loading Level");
	}

	

}