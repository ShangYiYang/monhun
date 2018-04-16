<template>
  <div id="content">
    <div id="options">
      <md-autocomplete v-model="modelInit" :md-options="skills" :md-open-on-focus="false" id="searchBar">
        <label>Skills</label>
      </md-autocomplete>
      <md-button class="md-dense md-raised md-primary" v-on:click="listArmors">List Armors</md-button>
      <md-button class="md-dense md-raised md-primary" v-on:click="genSets('Attack')">Generate Attack</md-button>
      <md-button class="md-dense md-raised md-primary" v-on:click="clearData">Clear</md-button>
    </div>
    <div class="display" v-for="i in simpleGen">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Armors</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in simpleGen">
              <md-table-head>{{a[0]}}</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Skills</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in simpleGen">
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
    </div>

    <div class="display" v-for="armorSet in generated">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Armors</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in armorSet">
              <md-table-head>{{a[0]}}</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Skills</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in armorSet">
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
    </div>
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
          head: [
            {'Name': 'H Atk 1', 'Skills': [{'SkillName': 'Attack', 'Level': 1}]},
            {'Name': 'H Atk 2', 'Skills': [{'SkillName': 'Attack', 'Level': 2}]},
            {'Name': 'H Atk 3', 'Skills': [{'SkillName': 'Attack', 'Level': 3}]}
          ],
          chest: [
            {'Name': 'C Atk 1', 'Skills': [{'SkillName': 'Attack', 'Level': 1}]},
            {'Name': 'C Atk 2', 'Skills': [{'SkillName': 'Attack', 'Level': 2}]},
            {'Name': 'C Atk 3', 'Skills': [{'SkillName': 'Attack', 'Level': 3}]}
          ],
          legs: [
            {'Name': 'L Def 1', 'Skills': [{'SkillName': 'Defense', 'Level': 1}]},
            {'Name': 'L Eva 1', 'Skills': [{'SkillName': 'Evade', 'Level': 1}]},
            {'Name': 'L Handi 1', 'Skills': [{'SkillName': 'Handicraft', 'Level': 1}]},
            {'Name': 'L CritEye 1', 'Skills': [{'SkillName': 'Critical Eye', 'Level': 1}]}
          ],
          arms: [
            {'Name': 'A Def 1', 'Skills': [{'SkillName': 'Defense', 'Level': 1}]},
            {'Name': 'A Eva 1', 'Skills': [{'SkillName': 'Evade', 'Level': 1}]},
            {'Name': 'A Handi 1', 'Skills': [{'SkillName': 'Handicraft', 'Level': 1}]},
            {'Name': 'A CritEye 1', 'Skills': [{'SkillName': 'Critical Eye', 'Level': 1}]}
          ],
          waist: [
            {'Name': 'W Atk 1', 'Skills': [{'SkillName': 'Attack', 'Level': 1}]},
            {'Name': 'W Atk 2', 'Skills': [{'SkillName': 'Attack', 'Level': 2}]},
            {'Name': 'W Atk 3', 'Skills': [{'SkillName': 'Attack', 'Level': 3}]}
          ],
          simpleGen: [],
          generated: []
        }),
      methods: {
          clearData: function() {
            this.$data.generated = [];
            this.$data.simpleGen = [];
          },
          addArmor: function(skill) {
            this.clearData();
            var armorData = this.$data.armor;
            var gen = this.$data.simpleGen;
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
            var gen = this.$data.simpleGen;
            for (var i=0; i < armorData.length; i++) {
              var temp = armorData[i];
              var data = [temp.Name, temp.Skills[0].SkillName, temp.Skills[0].Level];
                gen.push(data);
            }
          },
          genSets: function(skill) { // currently checks for sets with level greater than 3 for give skill
            // Temporary naive brute force implementation for testing purposes
            // Intended use with small input size to show functionality
            // with whole application
            // Optimizations will be made to improve performance at a later time
            this.clearData();
            var headData = this.$data.head;
            var chestData = this.$data.chest;
            var legData = this.$data.legs;
            var armData = this.$data.arms;
            var waistData = this.$data.waist;
            var gen = this.$data.generated;
            for (var i = 0; i < headData.length; i++) {
              var set = [];
              var levelCount = 0; // currently only keeps track of one skill
              set.push([headData[i].Name, headData[i].Skills[0].SkillName, headData[i].Skills[0].Level]);
              if (headData[i].Skills[0].SkillName === skill) {
                levelCount += headData[i].Skills[0].Level;
              }
              for (var j = 0; j < chestData.length; j++) {
                set.push([chestData[j].Name, chestData[j].Skills[0].SkillName, chestData[j].Skills[0].Level]);
                if (chestData[j].Skills[0].SkillName === skill) {
                  levelCount += chestData[j].Skills[0].Level;
                }
                for (var k = 0; k < legData.length; k++) {
                  set.push([legData[k].Name, legData[k].Skills[0].SkillName, legData[k].Skills[0].Level]);
                  if (legData[k].Skills[0].SkillName === skill) {
                    levelCount += legData[k].Skills[0].Level;
                  }
                  for (var l = 0; l < armData.length; l++) {
                    set.push([armData[l].Name, armData[l].Skills[0].SkillName, armData[l].Skills[0].Level]);
                    if (armData[l].Skills[0].SkillName === skill) {
                      levelCount += armData[l].Skills[0].Level;
                    }
                    for (var m = 0; m < waistData.length; m++) {
                      set.push([waistData[m].Name, waistData[m].Skills[0].SkillName, waistData[m].Skills[0].Level]);
                      if (waistData[m].Skills[0].SkillName === skill) {
                        levelCount += waistData[m].Skills[0].Level;
                        if (levelCount >= 7) {
                          var temp = [];
                          for (var w = 0; w < set.length; w++) {
                            temp.push(set[w]);
                          }
                          gen.push(temp);
                        }
                        levelCount -= waistData[m].Skills[0].Level;
                      }
                      if (levelCount >= 7) {
                        var temp2 = [];
                        for (var y = 0; y < set.length; y++) {
                          temp2.push(set[y]);
                        }
                        gen.push(temp2);
                      }
                      set.pop();
                    }
                    if (armData[l].Skills[0].SkillName === skill) {
                      levelCount -= armData[l].Skills[0].Level;
                    }
                    set.pop();
                  }
                  if (legData[k].Skills[0].SkillName === skill) {
                    levelCount -= legData[k].Skills[0].Level;
                  }
                  set.pop();
                }
                if (chestData[j].Skills[0].SkillName === skill) {
                  levelCount -= chestData[j].Skills[0].Level;
                }
                set.pop();
              }
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

  #options {
    margin-bottom: 10px;
  }

  .display {
    background-color: pink;
    margin-bottom: 10px;
  }
</style>
