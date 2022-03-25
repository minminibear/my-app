import React from "react";

const data = [
  {
    id:1,
    name:"リオネル・メッシ",
    team:"FCバルセロナ",
    description:
    "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
    isFollow: false,
  },
  {
    id: 2,
    name: "クリスティアーノ・ロナウド",
    team: "Juventus",
    description:
      "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
    isFollow: false,
  },
  {
    id: 3,
    name: "ネイマール",
    team: "パリ・サンジェルマン",
    description:
      "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
    isFollow: false,
  },
];

function App() {
  // フォローボタン
  const [accounts, setAccounts] = React.useState(data); //　初期値にdataを渡すことにより、上記のデータを渡すことができる。
  // console.log(accounts);
  const onClickFollow = React.useCallback(
    (id) => {
      const updatedAccounts = accounts.map((e) => {
        console.log(e.id);
        if (e.id === id) {
          return {
            ...e,
            isFollow: !e.isFollow,
          };
        } else {
          return e;
        }
      });
      setAccounts(updatedAccounts);
    },
    [accounts, setAccounts]
  );
  return (
    <ul className="accountList">
      {accounts.map((e) => {
        return (
          <li key={e.id} class="accountList__item">
            <div>
              <div class="account__summary">
                <div>
                  <p class="account__name">{e.name}</p>
                  <p class="account__team">{e.team}</p>
                </div>
                <div>
                  <button
                    type="button"
                    class={`followBtn ${e.isFollow ? "isFollow" : ""}`}
                    onClick={() => onClickFollow(e.id)}
                  >
                    {e.isFollow ? "フォロー中" : "フォローする"}
                  </button>
                </div>
              </div>
              <p class="account__description">{e.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default App;