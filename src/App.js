import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Home/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import ScrollToTop from './ScrollToTop';
import theme from './theme';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <ScrollToTop>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about-us" component={AboutUs} />
                            <Route path="/:food" component={ProfilePage} />
                        </Switch>
                    </ScrollToTop>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
