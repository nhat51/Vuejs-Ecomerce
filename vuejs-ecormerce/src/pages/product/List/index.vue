<template>
  <div>
    <a-card>
      <div style="padding-bottom: 20px">
        <router-link to="/products/create">
          <a-button type="primary" icon="plus">
            Add product
          </a-button>
        </router-link>
      </div>
      <a-table  :columns="columns" :pagination="false" rowKey="id" :data-source="data">
         <span slot="category" slot-scope="text">
            <p>{{ text.name }}</p>
         </span>
        <span slot="thumbnail" slot-scope="text">
             <img :src="text" style="width: 100%">
         </span>
        <div slot="action" slot-scope="text,data">
          <a class="button" :href="'/products/delete/'+ data.id "><a-icon type="delete" /></a> |
          <a class="button" :href="'/products/edit/'+ data.id "><a-icon type="edit" /></a> |
          <a class="button" :href="'/products/detail/'+ data.id " ><a-icon type="info-circle" /></a>
        </div>
      </a-table>
      <div style="padding-top: 15px">
        <a-pagination
            show-size-changer
            :default-current="3"
            :total="totalRecords"
            @showSizeChange="onShowSizeChange"
            @change="changePage"
        />
      </div>
    </a-card>
  </div>
</template>
<script>
import ProductService from "@/service/ProductService";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    ellipsis: true,
    scopedSlots: {customRender: 'thumbnail'}
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    ellipsis: true,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    ellipsis: true,
    scopedSlots: {customRender: 'category'},

  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    ellipsis: true,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    ellipsis: true,
    scopedSlots: {customRender: 'action'},
  }

];


export default {
  data() {
    return {
      data: [],
      columns,
      totalRecords: undefined,
      params:{
          pageSize: 5,
          page: 1
      }
    };
  },
  created(){
    this.getProducts()
  },
  methods:{
    getProducts(){
      ProductService.getAll(this.params).then(
          rs =>{
            console.log(rs.data.data);
            this.data = rs.data.data;
            this.totalRecords = rs.data.pagination.totalItems
          }
      )
    },
    onShowSizeChange(current, pageSize) {
      this.params.pageSize = pageSize
      this.getProducts()
    },

    changePage(current){
      this.params.page = current;
      this.getProducts();
    }
  }
};
</script>
