<template>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-heading">
        <strong> All Resources</strong>
      </div>
      <div class="row">
        <div class="search-wrapper panel-heading col-sm-12">
          <input
            v-model="searchQuery"
            class="form-control"
            type="text"
            placeholder="Search"
          >
        </div>                        
      </div>
      <div class="table-responsive">
        <table
          v-if="resources.length"
          class="table"
        >
          <thead>
            <tr>
              <th>Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in resultQuery"
              :key="item.title"
            >
              <td>
                <a
                  :href="item.uri"
                  target="_blank"
                >{{ item.title }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
        searchQuery: null,
        resources:[
            {title:"ABE Attendance",uri:"aaaa.com",category:"a",icon:null},
            {title:"Accounting Services",uri:"aaaa.com",category:"a",icon:null},
            {title:"Administration",uri:"aaaa.com",category:"a",icon:null},
            {title:"Advanced Student Lookup",uri:"bbbb.com",category:"b",icon:null},
            {title:"Art & Sciences",uri:"bbbb.com",category:"b",icon:null},
            {title:"Auxiliares Services",uri:"bbbb.com",category:"b",icon:null},
            {title:"Basic Skills",uri:"cccc.com",category:"c",icon:null},
            {title:"Board of Trustees",uri:"dddd.com",category:"d",icon:null}
        ]
    };
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
  }
}
</script>