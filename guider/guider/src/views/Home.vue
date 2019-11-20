<template>
  <div class="home">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="日期">
          <div class="block">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
      </el-form-item>
      <el-form-item label="计数">
        <el-input-number v-model="form.count" :min="0" :max="48" label="计数"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table
      id="table"
      :data="list"
      :row-class-name="tableRowClassName"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="count" label="计数" width="180"></el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleChange(scope)" type="text" size="small">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope)"  size="small" disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  components: {},
  data() {
    return {
      list: [],
      form: {
        date: new Date(),
        count: 0
      }
    };
  },
  created() {
    this.fetchData()
  },
  filters: {
  },
  methods: {
    fetchData() {
      axios.get("http://localhost:3000/list").then(res => {
        let list = []
        for(let i = 0;i < res.data.length; i++) {
          list.push({
            date: res.data[i].date,
            count: res.data[i].count,
            id: res.data[i].id
          })
        }
        this.list= list
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.count === 0) {
        return "warning-row";
      }
    },
    onSubmit(e) {
      e.preventDefault();
      let add = {
        date: this.form.date.format("yyyy-MM-dd"),
        count: this.form.count
      }
      let that = this
      //POST
      fetch("http://localhost:3000/list", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(add)
      })
      .then(function(response) {
        that.list.push(add)
        that.form = {}
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json: ", json);
      })
      .catch(function(ex) {
        console.log("parsing failed: ", ex);
      });
    },
    handleChange(scope) {
      console.log(scope, "scope")
    },
    handleDelete(scope) {
      console.log(scope)
      //delete
      return 
      fetch("http://localhost:3000/list/" + scope.row.id, {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        that.list.push(add)
        that.form = {
          date: new Date(),
          count: 0
        }
        return response.json();
      })
      .then(function(json) {
      })
      .catch(function() {

      });
    }
  }
};
</script>

<style lang="scss">
#table {
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.warning-row td {
  background-color: oldlace;
}
</style>