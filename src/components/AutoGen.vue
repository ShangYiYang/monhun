<template>
  <div id="content">
    <md-autocomplete v-model="modelInit" :md-options="skills" :md-open-on-focus="false" id="searchBar">
      <label>Skills</label>
    </md-autocomplete>
    <md-button class="md-dense md-raised md-primary" v-on:click="listArmors">List Armors</md-button>
    <md-button class="md-dense md-raised md-primary" v-on:click="addArmor('Attack')">Generate Attack</md-button>
    <md-button class="md-dense md-raised md-primary" v-on:click="clearData">Clear</md-button>
    <md-content>
      <div class="md-layout">
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Armors</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in generated">
              <md-table-head>{{a[0]}}</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Skills</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in generated">
              <md-table-head>{{a[1]}} {{a[2]}}</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Decos</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>D1</md-table-head>
            </md-table-row>
          </md-table>
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>
    export default {
        name: "auto-gen",
        data: () => ({
          modelInit: null,
          skills: [
            'Attack 1',
            'Attack 2',
            'Attack 3',
            'Evade 1',
            'Handicraft 1',
            'Critical Eye 1',
            'Defense 1'
          ],
          armor: [
            {'Name': 'Atk 1', 'Skills': [{'SkillName': 'Attack', 'Level': 1}]},
            {'Name': 'Atk 2', 'Skills': [{'SkillName': 'Attack', 'Level': 2}]},
            {'Name': 'Atk 3', 'Skills': [{'SkillName': 'Attack', 'Level': 3}]},
            {'Name': 'Def 1', 'Skills': [{'SkillName': 'Defense', 'Level': 1}]},
            {'Name': 'Eva 1', 'Skills': [{'SkillName': 'Evade', 'Level': 1}]},
            {'Name': 'Handi 1', 'Skills': [{'SkillName': 'Handicraft', 'Level': 1}]},
            {'Name': 'CritEye 1', 'Skills': [{'SkillName': 'Critical Eye', 'Level': 1}]}
          ],
          generated: []
        }),
      methods: {
          clearData: function() {
            this.$data.generated = [];
          },
          addArmor: function(skill) {
            this.clearData();
            var armorData = this.$data.armor;
            var gen = this.$data.generated;
            for (var i=0; i < armorData.length; i++) {
              var temp = armorData[i];
              var data = [temp.Name, temp.Skills[0].SkillName, temp.Skills[0].Level];
              if (data[1] === skill) {
                gen.push(data);
              }
            }
          },
          listArmors: function() {
            this.clearData();
            var armorData = this.$data.armor;
            var gen = this.$data.generated;
            for (var i=0; i < armorData.length; i++) {
              var temp = armorData[i];
              var data = [temp.Name, temp.Skills[0].SkillName, temp.Skills[0].Level];
                gen.push(data);
            }
          }
      },
      beforeMount() {
          //this.addArmor()
      }
    }
</script>

<style scoped>
  #content {
    margin: auto;
    width: 80%;
    background-color: pink;
    text-align: center;
  }

  .topRow {
    border-bottom: solid black 1px;
  }

  .md-table-head {
    text-align: center;
  }

  .md-button {
    background-color: hotpink;
  }

  #searchBar {
    background-color: white;
  }

</style>
