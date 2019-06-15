<template>
  <div id="app">
      <b-navbar toggleable="sm" type="light" variant="light" sticky="true">
        <b-button variant="outline-info" title="back" v-show="!mainScreen" @click="toggleMain()"><</b-button>
        <b-navbar-toggle class="m-1" target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand style="flex-grow:1">{{setHeader}}</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav style="flex-grow:0">
          <b-navbar-nav>
            <b-nav-text>since {{getDate}}</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    <!-- main -->
    <div class="grid" v-show="mainScreen">
      <div class="grid__item" @click="toggleCart()">
        <img src="./assets/cart.png" alt="cart">
        <h3 class="grid__item-header">cart</h3>
      </div>
      <div class="grid__item" @click="toggleMenu()">
        <img src="./assets/list.png" alt="menu">
        <h3 class="grid__item-header">menu</h3>
      </div>
      <div class="grid__item" @click="toggleFridge()">
        <img src="./assets/fridge3.png" alt="fridge">
        <h3 class="grid__item-header">fridge</h3>
      </div>
      <div class="grid__item">
        <img src="./assets/grocery.png" alt="grocery">
        <h3 class="grid__item-header">grocery</h3>
      </div>
      <div class="grid__item">
        <img src="./assets/stat.png" alt="stat">
        <h3 class="grid__item-header">statistic</h3>
      </div>
      <div class="grid__item" @click="toggleSettings()">
        <img src="./assets/settings.png" alt="settings">
        <h3 class="grid__item-header">settings</h3>
    </div>
  </div>
  <!-- end main -->

  <!-- cart -->
  <div class="cart" v-show="cart">
    <div class="cart__item">
      <div class="cart__item-header">
        <b-button id="show-btn" variant="success" @click="$bvModal.show('bv-modal-inCart')">+</b-button>
        <h2>Tomato</h2>
        <b-button variant="secondary" v-b-modal.modal-question>?</b-button>
     </div>
        <!-- modal add -->
        <b-modal id="bv-modal-inCart" title="Tomato" hide-footer>
          <b-form>
            <b-form-group id="input-group-3" label="Amount:" label-for="amount">
              <b-form-input
                id="amount"
                placeholder="11"
                required
                type="number"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Units:">
              <b-form-radio-group
                id="btn-radios-1"
                :options="['grams','piece','ml']"
                buttons
                label="Units:"
                button-variant="outline-primary"
                class="mx-auto"
              ></b-form-radio-group>
            </b-form-group>
            <b-form-group label="Date:"  label-for="input-2">
              <b-form-input
                id="input-2"
                required
                type="date"
              ></b-form-input>
            </b-form-group>
            <p>Price:</p>
            <b-input-group label="Price:"  label-for="input-3"  append=".₽">
              <b-form-input
                id="input-3"
                required
                label="price"
                type="number"
              ></b-form-input>
            </b-input-group>
            <br>
            <b-form-group label="Store:"  label-for="input-4">
              <b-form-select
                id="input-4"
                required
                :options="['Auchan','Магнит']"
              ></b-form-select>
            </b-form-group>
            <b-form-group>
              <b-form-radio-group
                id="btn-radios-1"
                :options="['fresh','long-term']"
                buttons
                button-variant="outline-primary"
                class="mx-auto"
              ></b-form-radio-group>
            </b-form-group>
          </b-form>
          <b-button class="mt-3" variant="success" block @click="$bvModal.hide('bv-modal-inCart')">Apply</b-button>
        </b-modal>
        <!-- end modal add -->

        <!-- modal ? -->
        <b-modal id="modal-question" title="Tomato" hide-footer>
          <b-table
            striped
            fixed
            :items="[{dish:'Pasta',count:'2'},{dish:'Tomatella',count:7}]"
            :fields="['dish','count']"
          ></b-table>
        </b-modal>
        <!-- end modal ? -->
      
    
      <div class="cart__item-assets">
        <div class="cart__item-assets-cell">
          <b-button variant="primary" v-b-popover="'Магнит'" size="sm">
            Price <b-badge variant="light">120</b-badge>
          </b-button>
        </div>
        <div class="cart__item-assets-cell">
          <b-button variant="warning" size="sm">
            Have <b-badge variant="light">4</b-badge>
          </b-button>
        </div>
        <div class="cart__item-assets-cell">
          <b-button variant="info" size="sm">
            Need <b-badge variant="light">11</b-badge>
          </b-button>
        </div>
      </div>
    </div>
  </div>
  <!-- end cart -->

  <!-- menu -->
  <div class="menu" v-show="menu" >

    <div class="menu__item selected" @click="openWeek()">
      <div class="menu__item-header">
        <div class="star"><div class="mark">5.0</div></div>
        <div class="label">Italy Week</div>
        <b-btn variant="success">✔</b-btn>
      </div>
      <div class="menu__item-body">
        <img src="./assets/menu/1.jpg" alt="1" class="menu-picture">
        <img src="./assets/menu/2.jpg" alt="2" class="menu-picture">
        <img src="./assets/menu/3.jpg" alt="3" class="menu-picture">
      </div>
      <div class="menu__item-footer">selected since: <span>13/10/19</span></div>
    </div>

    <div class="menu__item">
      <div class="menu__item-header">
        <div class="star"><div class="mark">4.1</div></div>
        <div class="label">Spanish Week</div>
        <b-btn>⬜</b-btn>
      </div>
      <div class="menu__item-body">
        <img src="./assets/menu/4.jpg" alt="4" class="menu-picture">
        <img src="./assets/menu/5.jpg" alt="5" class="menu-picture">
        <img src="./assets/menu/6.jpg" alt="6" class="menu-picture">
        <img src="./assets/menu/7.jpg" alt="7" class="menu-picture">
      </div>
      <div class="menu__item-footer">last selected: <span>6/10/19</span></div>
    </div>

    <div class="menu__item">
      <div class="menu__item-header">
        <div class="star"><div class="mark">4.4</div></div>
        <div class="label">French Week</div>
        <b-btn>⬜</b-btn>
      </div>
      <div class="menu__item-body">
        <img src="./assets/menu/9.jpg" alt="4" class="menu-picture">
        <img src="./assets/menu/10.jpg" alt="5" class="menu-picture">
        <img src="./assets/menu/11.jpg" alt="6" class="menu-picture">
      </div>
      <div class="menu__item-footer">last selected: <span>6/10/19</span></div>
    </div>

    <!-- new item -->
      <div class="menu__half">
        <span>➕</span>
        <h5>add new</h5>
      </div>
      <div class="menu__half delete">
        <span>✂</span>
        <h5>delete all</h5>
      </div>
    <!-- end new item -->
 <!-- end menu -->
  </div>
 <!-- end menu -->

 <!-- fridge -->
  <div class="fridge" v-show="fridge">
    <div class="fridge__shelve">
      <div class="fridge__shelve-item">
        <h4>Tomato</h4>
        <b-button variant="light w-50 mx-auto">4</b-button>
        <span>10/11/18</span>
      </div>
      <div class="fridge__shelve-item">
        <h4>Peach</h4>
        <b-button variant="light w-50 mx-auto">1</b-button>
        <span>17/11/18</span>
      </div>
    </div>
    <div class="fridge__shelve"></div>
    <div class="fridge__shelve"></div>
    <div class="fridge__shelve"></div>
    <div class="fridge__shelve"></div>
    <div class="fridge__shelve"></div>
<!-- end fridge -->
  </div>
<!-- end fridge -->

<!-- settings -->
  <div class="settings" v-show="settings">
    <b-button variant="primary">Sign Out</b-button>
    <b-button variant="danger">Clear history</b-button>
  </div>
 <!-- settings end -->


  <!-- week-menu -->
  <div class="week" v-show="week">

    <div class="week__item">
      <div class="week__item-header">
        <div class="star"><div class="mark">4.1</div></div>
        <div class="label">Italy Week</div>
        <b-btn>⬜</b-btn>
      </div>

      <div class="week__item-body">
        <div class="week__item-body-sidebar">
          <img src="./assets/menu/1.jpg" alt="dish" class="dish-face">
          <div class="rate">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
        <div class="week__item-body-content">
          <div class="content-header">
            Fettuchini Alfredo
          </div>
          <div class="content-badges">
            <b-button variant="info" size="sm">
              Sum <b-badge pill variant="light">11</b-badge>
            </b-button>
            <b-button variant="info" size="sm">
              Time <b-badge pill variant="light">50</b-badge>
            </b-button>
          </div>
          <div class="content-footer">last served 08/11/18</div>
        </div>
      </div>

      <div class="week__item-body">
        <div class="week__item-body-sidebar">
          <img src="./assets/menu/3.jpg" alt="dish" class="dish-face">
          <div class="rate">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
        <div class="week__item-body-content">
          <div class="content-header">
            Cannelloni
          </div>
          <div class="content-badges">
            <b-button variant="info" size="sm">
              Sum <b-badge pill variant="light">13</b-badge>
            </b-button>
            <b-button variant="info" size="sm">
              Time <b-badge pill variant="light">115</b-badge>
            </b-button>
          </div>
          <div class="content-footer">last served 21/01/05</div>
        </div>
      </div>

      <div class="menu__half">
        <span>➕</span>
        <h5>add new</h5>
      </div>
      <div class="menu__half delete">
        <span>✂</span>
        <h5>delete all</h5>
      </div>

    </div>

  </div>




<!-- end app -->
</div>
<!-- end app -->
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
<script>
export default {
  data(){
    return {
      name:null,
      mainScreen:false,
      cart:false,
      menu:false,
      fridge:false,
      settings:false,
      week:true
    }
  },
  methods:{
    toggleMain(){
        this.mainScreen = true
        this.cart = false
        this.menu = false
        this.fridge = false
        this.settings = false
        this.week = false

    },
    toggleCart(){
        this.mainScreen = false
        this.cart = true
    },
    toggleMenu(){
        this.mainScreen = false
        this.menu = true
        this.week = false
    },
    toggleFridge(){
        this.mainScreen = false
        this.fridge = true
    },
    toggleSettings(){
        this.mainScreen = false
        this.settings = true
    },
    openWeek(){
      this.week = true
      this.menu = false
    }
  },
  computed: {
    setHeader(){
      if(this.mainScreen){
        return this.getName
      }
      else if(this.cart){
        return 'Shopping list'
      }
      else if(this.menu){
        return 'Menu'
      }
      else if(this.fridge){
        return 'Fridge'
      }
      else if(this.settings){
        return 'Settings'
      }
      else if(this.week){
        return 'Week'
      }
    },
    getName(){
      return this.$store.getters.getName
    },
    getDate(){
      return this.$store.getters.getDate
    }
  }
}
</script>
