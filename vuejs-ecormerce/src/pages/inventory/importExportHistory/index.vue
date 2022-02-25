<template>
  <a-table :pagination="false"  :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"> Id</span>
    <span slot="status" slot-scope="status">
      <a-tag
          :key="status"
          :color="status === 'REJECT' ? 'volcano' : status === 'CONFIRM' ? 'geekblue' : 'green'"
      >
        {{ status.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="payment" slot-scope="payment_status">
      <a-tag
          :key="payment_status"
          :color="payment_status === 'UNPAID' ? 'volcano' : payment_status.length > 5 ? 'geekblue' : 'green'"
      >
        {{ payment_status.toUpperCase() }}
      </a-tag>
    </span>
  </a-table>
</template>
<script>


import InventoryService from "@/service/InventoryService";

const columns = [
  {
    dataIndex: 'id',
    key: 'id',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'id' },
  },
  {
    title: 'Product id',
    dataIndex: 'productId',
    key: 'productId',
  },
  {
    title: 'Order Id',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  }
];

export default {
  data() {
    return {
      columns,
      data: []
    };
  },
  created() {
    InventoryService.getAll().then(
        res =>{
          this.data = res.data.data
          console.log(res.data.data)
        }
    )
  },
  methods:{

  }
};
</script>
