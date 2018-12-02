import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import StarRatingComponent from 'react-star-rating-component';

import { agate, androidstudio, arduinoLight, arta, ascetic, atelierCaveDark, atelierCaveLight, atelierDuneDark, atelierDuneLight, atelierEstuaryDark, atelierEstuaryLight, atelierForestDark, atelierForestLight, atelierHeathDark, atelierHeathLight, atelierLakesideDark, atelierLakesideLight, atelierPlateauDark, atelierPlateauLight, atelierSavannaDark, atelierSavannaLight, atelierSeasideDark, atelierSeasideLight, atelierSulphurpoolDark, atelierSulphurpoolLight, atomOneDark, atomOneLight, brownPaper, codepenEmbed, colorBrewer, darcula, dark, darkula, defaultStyle, docco, dracula, far, foundation, githubGist, github, googlecode, grayscale, gruvboxDark, gruvboxLight, hopscotch, hybrid, idea, irBlack, kimbieDark, kimbieLight, magula, monoBlue, monokaiSublime, monokai, obsidian, ocean, paraisoDark, paraisoLight, pojoaque, purebasic, qtcreatorDark, qtcreatorLight, railscasts, rainbow, routeros, schoolBook, solarizedDark, solarizedLight, sunburst, tomorrowNightBlue, tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow, vs, vs2015, xcode, xt256, zenburndarcula } from 'react-syntax-highlighter/styles/hljs';

export default class Submit extends Component {
  constructor() {
    super()
    this.state = {
      targetInputText: '',
      language: 'javascript',
      styles: [agate, androidstudio, arduinoLight, arta, ascetic, atelierCaveDark, atelierCaveLight, atelierDuneDark, atelierDuneLight, atelierEstuaryDark, atelierEstuaryLight, atelierForestDark, atelierForestLight, atelierHeathDark, atelierHeathLight, atelierLakesideDark, atelierLakesideLight, atelierPlateauDark, atelierPlateauLight, atelierSavannaDark, atelierSavannaLight, atelierSeasideDark, atelierSeasideLight, atelierSulphurpoolDark, atelierSulphurpoolLight, atomOneDark, atomOneLight, brownPaper, codepenEmbed, colorBrewer, darcula, dark, darkula, defaultStyle, docco, dracula, far, foundation, githubGist, github, googlecode, grayscale, gruvboxDark, gruvboxLight, hopscotch, hybrid, idea, irBlack, kimbieDark, kimbieLight, magula, monoBlue, monokaiSublime, monokai, obsidian, ocean, paraisoDark, paraisoLight, pojoaque, purebasic, qtcreatorDark, qtcreatorLight, railscasts, rainbow, routeros, schoolBook, solarizedDark, solarizedLight, sunburst, tomorrowNightBlue, tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow, vs, vs2015, xcode, xt256, zenburndarcula],
      stylesNames: ['agate', 'androidstudio', 'arduinoLight', 'arta', 'ascetic', 'atelierCaveDark', 'atelierCaveLight', 'atelierDuneDark', 'atelierDuneLight', 'atelierEstuaryDark', 'atelierEstuaryLight', 'atelierForestDark', 'atelierForestLight', 'atelierHeathDark', 'atelierHeathLight', 'atelierLakesideDark', 'atelierLakesideLight', 'atelierPlateauDark', 'atelierPlateauLight', 'atelierSavannaDark', 'atelierSavannaLight', 'atelierSeasideDark', 'atelierSeasideLight', 'atelierSulphurpoolDark', 'atelierSulphurpoolLight', 'atomOneDark', 'atomOneLight', 'brownPaper', 'codepenEmbed', 'colorBrewer', 'darcula', 'dark', 'darkula', 'defaultStyle', 'docco', 'dracula', 'far', 'foundation', 'githubGist', 'github', 'googlecode', 'grayscale', 'gruvboxDark', 'gruvboxLight', 'hopscotch', 'hybrid', 'idea', 'irBlack', 'kimbieDark', 'kimbieLight', 'magula', 'monoBlue', 'monokaiSublime', 'monokai', 'obsidian', 'ocean', 'paraisoDark', 'paraisoLight', 'pojoaque', 'purebasic', 'qtcreatorDark', 'qtcreatorLight', 'railscasts', 'rainbow', 'routeros', 'schoolBook', 'solarizedDark', 'solarizedLight', 'sunburst', 'tomorrowNightBlue', 'tomorrowNightBright', 'tomorrowNightEighties', 'tomorrowNight', 'tomorrow', 'vs', 'vs2015', 'xcode', 'xt256', 'zenburndarcula'],
      style: docco,
      rating: 4, // comes from aggregated rating
    }
  }

  setTargetInput = (e) => {
    if (e.target.classList.contains('submit-code')) {
      this.setState({
        targetInputText: e.target.innerText
      })
      document.addEventListener('keypress', this.setTargetText);
      document.addEventListener('keydown', this.handleKeydownBehavior);
    }
  }

  handleKeydownBehavior = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      this.setState({
        targetInputText: this.state.targetInputText += '\  '
      })
    } else if (e.key === 'Backspace') {
      this.setState({
        targetInputText: this.state.targetInputText.slice(0, this.state.targetInputText.length - 1)
      })
    }
  }

  setTargetText = (e) => { // HANDLE UP/DOWN/LEFT/RIGHT/ETC
    if (e.key === 'Enter') {
      this.setState({
        targetInputText: this.state.targetInputText += '\n\r'
      })
    } else {
      this.setState({
        targetInputText: this.state.targetInputText += e.key
      })
    }
  }

  // handlePaste = (e) => {
  //   console.log(e)
  // }

  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value
    })
  }

  updateRating = (val) => {
    this.setState({
      rating: val
    })
  }

  setStyle = (e) => {
    const { value } = e.target;
    this.setState({
      style: eval(value)
    })
  }

  render() {
    console.log(this.state.styles[0])
    console.log(this.state)
    return (
      <div className="submit">

        <div className="submit-problem">
          <div>
            <textarea
              value={this.state.problem}
              onChange={this.updateProblemStatement}
              placeholder="Describe the question/problem.  Tell us what your inputs are, your intended output and any constraints or known issues"
              rows="8"
              cols="100" />
          </div>
          <div>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
              <option value="javascript" defaultValue>JAVASCRIPT</option>
              <option value="python">PYTHON</option>
              <option value="ruby">RUBY</option>
              <option value="java">JAVA</option>
              <option value="php">PHP</option>
              <option value="sql">SQL</option>
              <option value="objectivec">C</option>
            </select>
          </div>
        </div>


        <div className="submit-code">
          <select value={this.state.style} onChange={this.setStyle}>
            {this.state.stylesNames.map(e => e = <option value={e}>{e}</option>)}
          </select>
          <SyntaxHighlighter
            language={this.state.language}
            onClick={this.setTargetInput}
            // showLineNumbers={true}
            // startingLineNumber={1}
            // onPaste={this.handlePaste}
            wrapLines={true}
            style={this.state.style}
            children={<input value={3} />}
            className="submit-code">

            {this.state.targetInputText}
          </SyntaxHighlighter>
        </div>

        <div className="submit-rating">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.rating}
            onStarClick={(val) => this.updateRating(val)}
          />
        </div>
      </div>
    )
  }
}