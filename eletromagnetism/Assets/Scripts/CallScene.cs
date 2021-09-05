using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class CallScene : MonoBehaviour
{
    public void SceneCaller(string Scene) {
        SceneManager.LoadScene(Scene);
    }
}
