@script ExecuteInEditMode()

var guiSkin :GUISkin;
var gameSceneName :String;

var menuMusic : AudioSource; 

private var textAreaString :String = "";
private var isLoading :boolean = false;
private var isWebPlayer :boolean = false;

function Start() {
menuMusic.Play();
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
	
	GUI.Button(Rect((Screen.width/2)-250, Screen.height - 140, 500, 20),"Tempting Fate" );
	
	if(GUI.Button(Rect((Screen.width/2)-160, Screen.height - 110, 320, 70),"Start Game" ))
	{
		isLoading = true;
		Application.LoadLevel(gameSceneName);
	}

	isWebPlayer = (Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer);
	if (!isWebPlayer)
	{
		if(GUI.Button(Rect((Screen.width/2)-160, Screen.height - 80, 320, 120), "Quit" ))
		{
			Application.Quit();
		}
	}
	
	if(isLoading)
	{
		GUI.Label(Rect(5, (Screen.height) - 20, 400, 70), "Loading Level");
	}

	

}