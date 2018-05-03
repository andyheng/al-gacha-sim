import React from 'react';
import Tabs from "./Tabs";
import Panel from "./Panel";
import PanelContent from "./PanelContent"

class Main extends React.Component {
  constructor(props) {
    super(props)
    this._initState = {
      current: undefined,
      previous: []
    }
    this.state = this._initState
    this.roll = this.roll.bind(this)
    this.probability = this.probability.bind(this)
    this._clearState = this._clearState.bind(this)
  }

  _clearState() {
    this.setState(() => (this._initState))
  }

  probability(num, ssrRate, srRate, rRate, obj) {
    const selectRandom = (arr) => {
      return Math.floor(Math.random() * arr.length);
    }
    if (num <= ssrRate) {
      return obj.ssr[selectRandom(obj.ssr)];
    } else if (num <= srRate) {
      return obj.sr[selectRandom(obj.sr)]
    } else if (num <= rRate) {
      return obj.r[selectRandom(obj.r)]
    } else {
      return obj.n[selectRandom(obj.n)]
    }
  }

  roll(arr, a, b, c, obj) {
    const mapped = arr.map(roll => this.probability(roll, a, b, c, obj))
    this.setState(prevState => {
      const rmvAdd = () => {
        if (prevState.previous.length === 15) {
          let sliced = prevState.previous.slice(1);
          let concated = sliced.concat(mapped);
          return concated
        }
        return prevState.previous.concat(mapped);
      }
      const prevData = rmvAdd();
      return {
        current: mapped,
        previous: prevData
      }
    })
  }

  render() {
    const one = [Math.random()];
    const light = {
      ssr: [
        {
          name: "montpelier", 
          img: "https://azurlane.koumakan.jp/w/images/1/1d/MontpelierIcon.png"
        },
        {
          name: "san diego",
          img: "https://azurlane.koumakan.jp/w/images/c/c2/San_DiegoIcon.png"
        }
      ],
      sr: [
        {
          name: "cleveland",
          img: "https://azurlane.koumakan.jp/w/images/4/48/ClevelandIcon.png"
        },
        {
          name: "denver",
          img: "https://azurlane.koumakan.jp/w/images/6/6b/DenverIcon.png"
        }
      ],
      r: [
        {
          name: "phoenix",
          img: "https://azurlane.koumakan.jp/w/images/2/2a/PhoenixIcon.png"
        },
        {
          name: "amazon",
          img: "https://azurlane.koumakan.jp/w/images/e/e6/AmazonIcon.png"
        }
      ],
      n: [
        {
          name: "downes",
          img: "https://azurlane.koumakan.jp/w/images/c/c5/DownesIcon.png"
        },
        {
          name: "cassin",
          img: "https://azurlane.koumakan.jp/w/images/4/44/CassinIcon.png"
        }
      ]
    }
    const heavy = {
      ssr: [
        {
          name: "hood", 
          img: "https://azurlane.koumakan.jp/w/images/0/00/HoodIcon.png"
        },
        {
          name: "prinz eugen",
          img: "https://azurlane.koumakan.jp/w/images/f/f7/Prinz_EugenIcon.png"
        }
      ],
      sr: [
        {
          name: "wichita",
          img: "https://azurlane.koumakan.jp/w/images/9/98/WichitaIcon.png"
        },
        {
          name: "nelson",
          img: "https://azurlane.koumakan.jp/w/images/6/67/NelsonIcon.png"
        }
      ],
      r: [
        {
          name: "california",
          img: "https://azurlane.koumakan.jp/w/images/e/eb/CaliforniaIcon.png"
        },
        {
          name: "portland",
          img: "https://azurlane.koumakan.jp/w/images/6/6d/PortlandIcon.png"
        }
      ],
      n: [
        {
          name: "nevada",
          img: "https://azurlane.koumakan.jp/w/images/b/b3/NevadaIcon.png"
        },
        {
          name: "aoba",
          img: "https://azurlane.koumakan.jp/w/images/f/fd/AobaIcon.png"
        }
      ]
    }
    return (
      <div>
        <Tabs>
          <Panel title={"light"} clearState={this._clearState}>
            <PanelContent
              title={"Light Construction"}
              roll={() => this.roll(one, 0.07, 0.19, 0.45, light)}
              current={this.state.current}
              prev={this.state.previous}
            />
          </Panel>
          <Panel title={"heavy"} clearState={this._clearState}>
            <PanelContent
              title={"Heavy Construction"}
              roll={() => this.roll(one, 0.07, 0.19, 0.70, heavy)}
              current={this.state.current}
              prev={this.state.previous}
            />
          </Panel>
        </Tabs>
      </div>
    )
  }
}




export default Main