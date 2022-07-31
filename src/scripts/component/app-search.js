class AppSearch extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          .search-container {
            box-shadow: 0 4px 8px 0 rgb(200, 228, 195);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            top: 10px;
            background-color: white;
            margin-bottom: 1rem;
          }
          .search-container > input {
              width: 75%;
              padding: 16px;
              border: 0;
              border-bottom: 2px solid rgb(200, 228, 195);
              font-weight: bold;
          }
          
          .search-container > input:focus {
              outline: 0;
              border-bottom: 2px solid #39cc14;
          }
          
          .search-container > input:focus::placeholder {
              font-weight: bold;
          }
          
          .search-container >  input::placeholder {
              color: black;
              font-weight: normal;
          }
          
          .search-container > button {
              width: 23%;
              cursor: pointer;
              margin-left: auto;
              padding: 16px;
              background-color: rgb(200, 228, 195);
              color: white;
              border: 0;
              border-radius: .5rem;
              text-transform: uppercase;
          }

          .search-container > button:hover {
              background-color: #39cc14;
          }

          .search-container > button:active {
              background-color: rgb(200, 228, 195);
          }
          
          @media screen and (max-width: 550px){
              .search-container {
                  flex-direction: column;
                  position: static;
              }
          
              .search-container > input {
                  width: 100%;
                  margin-bottom: 12px;
              }
          
              .search-container > button {
                  width: 100%;
              }
          }
      </style>

      <div id="search-container" class="search-container">
        <input placeholder="Cari Komik" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Cari</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('app-search', AppSearch);
