<template>
  <div id="content">
    <md-content>
      <div class="md-layout">
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Armors</md-table-head>
            </md-table-row>
            <md-table-row v-for="a in generated">
              <md-table-head >{{a}}</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Skills</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>B2</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>B3</md-table-head>
            </md-table-row>
          </md-table>
        </div>
        <div class="md-layout-item">
          <md-table>
            <md-table-row class="topRow">
              <md-table-head>Decos</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>C2</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-head>C3</md-table-head>
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
          armor: [
            'A1',
            'A2',
            'A3',
            'A4',
            'A5'
          ],
          generated: []
        }),
      methods: {
          addArmor: function() {
            var armorData = this.$data.armor;
            var gen = this.$data.generated;
            for (var i=0; i < armorData.length; i++) {
              gen.push(armorData[i]);
            }
          }
      },
      beforeMount() {
          this.addArmor()
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
</style>
