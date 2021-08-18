class GridView {
  /**
   * properties
   * @param [array] _tableClass - классы, оформление
   * @param [array] data - входные данные
   * @param [array] _attribute - управляем что выводим и как из выходных данных
   * @param [array] _element - куда выводить таблицу
   * @param [array] _header - заголовок таблицы
   * @param [array] _headerClass - классы заголовка
   */
  constructor() {
    this._header = "";
    this._headerClass = [];
    this._tableClass = [];
    this._element = "body";
    this.attribute = [];
  }

  /**
   * задаем значение заголовка
   */
  set header(header) {
    if (typeof header === "string" && header.trim() != "") {
      this._header = header.trim();
      return true;
    }
    return false;
  }

  /**
   * задаем классы заголовка
   */
  set headerClass(headerClass) {
    if (typeof headerClass === "object") {
      this._headerClass = headerClass;
      return true;
    }
    return false;
  }

  set element(element) {
    if (document.querySelector(element)) {
      this._element = element;
      return true;
    }
    return false;
  }

  /**
   * Методы выведения таблицы
   */

  render() {

    //вывод заголовка

    if (this._header) {
      const header = document.createElement('h1');
      header.textContent = this._header;
      this._headerClass.forEach(cssClass => {
        header.classList.add(cssClass);
      });
      document.querySelector(this._element).append(header);
    }

    //создание заголовка для таблицы с данными
    const table = document.createElement('table');
    this._tableClass.forEach(cssClass => {
      table.classList.add(cssClass);
    })

    let trHeader = document.createElement('tr');

    for (let key in this.attribute) {
      let th = document.createElement('th');
      //проверяем, есть ли label у проверяемого атрибута
      if (this.attribute[key].label) {
          th.textContent = this.attribute[key].label;
      } else {
          th.textContent = key;
      }
      trHeader.append(th);
    }

    table.append(trHeader);

    //вывод данных в таблицу

    for (let i=0; i<this.data.length; i++) {
        let dataArr = this.data[i];
        let tr = document.createElement("tr");
        for (let key in this.attribute) {
          //создание ячейки таблицы
          let td = document.createElement("td");
          let value = dataRow[key]
          //проверяем, есть ли у атрибута свойство value (в которое записана какая-либо проверка значения)
          if (this.attribute[key].value) {
              value = this.attribute[key].value(dataArr);
          } 
          //проверка наличия атрибута src
          if (this.attribute[key].src) {
            //если есть src равный html то выводим value как html-код
            td.innerHTML = value;
          }
          else {
            td.textContent = value;
          }

          tr.append(td)
        }

      table.append(tr)
    }

    document.querySelector(this._element).append(table);
  }
}

