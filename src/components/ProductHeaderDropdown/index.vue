<template>
  <div name="product-header-button">
    <!-- =============== Dropdown Button to Trigger Modal ================= -->
    <b-dropdown right variant="primary" size="sm">
        <template slot="button-content"> Tambah </template> 
        <b-dropdown-item @click="onShowModal">Tambah Data Baru</b-dropdown-item>
        <b-dropdown-item @click="onShowModalBatch">Upload Data Excel</b-dropdown-item>
<!--        <b-dropdown-item >Download Template Excel</b-dropdown-item>-->
    </b-dropdown>

    <!-- =============== Form Modal to Add Product ================= -->
    <CustomModal v-if="showModalAdd" @close="showModalAdd=false">
      <div slot="header">
        Tambah Product
      </div>

      <div slot="body">
        <b-form ref="form" @submit.prevent="onHandleSubmit">
          <div class="row grup-input">
            <label>Nama</label>
            <b-form-input type="text" v-model="form.name" placeholder="Masukkan nama produk" required/>
          </div>
          <div class="row grup-input">
            <label>Deskripsi</label>
            <b-form-textarea  v-model="form.description" placeholder="Masukkan deskripsi produk" required rows="3"/>
          </div>
          <div class="row grup-input">
            <label>Harga Awal</label>
            <b-form-input v-model="form.listPrice" placeholder="Harga awal" required type="number"/>
          </div>
          <div class="row grup-input">
            <label>Harga Akhir</label>
            <b-form-input v-model="form.offerPrice" placeholder="Harga akhir" required type="number"/>
          </div>
          <div class="row grup-input">
            <label>Stock</label>
            <b-form-input v-model="form.stock" placeholder="Stock" required type="number"/>
          </div>

          <div class="row grup-input">
            <b-button type="submit" variant="success" style="width:100%">
              Tambah Product
            </b-button>
          </div>

          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>

    <!-- =============== Form Modal to Upload Product ================= -->
    <CustomModal v-if="showModalBatch" @close="showModalBatch=false">
      <div slot="header">
        Upload Product
      </div>

      <div slot="body">
        <b-form @submit.prevent="onHandleUpload" ref="formBatch" style="text-align:left" >
          <b-row style="padding:0 1em 0 1em">
<!--            <b-form-file v-model="file" ref="file" id="file" v-on:change="onChangeFileUpload()" required></b-form-file>-->
            <input type="file" id="file" ref="file" multiple v-on:change="onChangeFileUpload()"/>
          </b-row><br>
          <div id="r_button2">
            <b-button type="submit" variant="success" style="width:100%">
              Upload File
            </b-button>
          </div>
          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>

  </div>
  
</template>

<script src="./ProductHeaderDropdown.js"></script>

<style src="./ProductHeaderDropdown.css"></style>

