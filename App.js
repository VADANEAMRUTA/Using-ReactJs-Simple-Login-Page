
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="logo-box">
          <img src="./twit.png" alt="twit" classname="twit" />
          <h2>Sign In to Twitter</h2>
          <button>
          <img src="./google.png" alt="twit" />
          Sign in with Google
          </button>
          <button>
          <img src="./apple.png" alt="twit" />
          Sign in with Google
          </button>
          <hr></hr>
          <span>Or</span>
          <form>
            <input type="text" placeholder='Phone email or username'/>
            <button>Next
            </button>
          </form>
          <button>Forget Password</button>
          <p>Don't Have an account?<a>Sign Up</a>
          </p>
      </div>
    </div>
  );
}

export default App;