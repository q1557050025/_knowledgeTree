<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 00:07:59
 * @LastEditTime: 2019-08-21 00:30:23
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="row flex">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>
		<div class="flexB">
			<div class="flex">
				<div class="flex" v-for="(list, key) of listAll2" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log" >
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
			<div class="flex">
				<div class="flex"  v-for="(list, key) of listAll" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log">
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
			<div class="flex">
				<div class="flex"  v-for="(list, key) of listAll" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log">
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
			<div class="flex">
				<div class="flex"  v-for="(list, key) of listAll" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log">
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
			<div class="flex">
				<div class="flex"  v-for="(list, key) of listAll" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log">
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
			<div class="flex">
				<div class="flex"  v-for="(list, key) of listAll" :key="key" >
					<h3>{{key}}</h3>
					<draggable :list="list" group="people" @change="log">
						<div
							class="list-group-item"
							v-for="(element, index) in list"
							:key="element.name"
						>
							{{ element.name }} {{ index }}
						</div>
					</draggable>
				</div>
			</div>
		</div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
			],
			list3: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
			],
			listAll: {
				list1: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list2: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list3: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list4: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list5: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list6: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
			},
			listAll2: {
				list1: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list2: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list3: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list4: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list5: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
				list6: [
					{ name: "Juan", id: 5 },
					{ name: "Edgard", id: 6 },
					{ name: "Johnson", id: 7 }
				],
			}
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style>
	div {
		border: solid 1px black;
	}
	.flex {
		display: flex;
		flex-direction: row;
		width: 800px;
	}
	.flexB {
		display: flex;
		flex-direction: column;
	}
</style>