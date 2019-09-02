<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 23:20:21
 * @LastEditTime: 2019-08-20 23:36:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="home">
    <aside>
      <ul>
        <li v-for="(item, index) in listA" :key="index">
          {{item}}
        </li>
      </ul>
    </aside>
    <main>
      <table>
        <tr v-for="(items, key) of listB" :key="key">
          <td v-for="(item, index) in items" :key="index">
            {{key}}{{item}}
          </td>
        </tr>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  }, 
  data() {
    return {
      listA: [0,1,2,3,4,5,6,7,8,9],
      listB: {
        A:[0,1,2,3,4,5,6,7,8,9],
        B:[0,1,2,3,4,5,6,7,8,9],
        C:[0,1,2,3,4,5,6,7,8,9],
        D:[0,1,2,3,4,5,6,7,8,9],
        E:[0,1,2,3,4,5,6,7,8,9],
        F:[0,1,2,3,4,5,6,7,8,9],
        G:[0,1,2,3,4,5,6,7,8,9],
      }
    }
  }
}
</script>

<style>
  * {
    list-style-type: none;
  }
  td {
    width: 100px;
    height: 40px;
    border: solid 1px black;
  }

  .home {
    display: flex;
    flex-direction: row;
  }

  li {
    margin: 5px;
    width: 80px;
    height: 30px;
    border: solid 1px black;
    background-color: rgba(255,0,0,.3);
  }
</style>