<template>
  <div name="TableProduct" class="">
      
      <div class="tableContainer">
        <table width="100%" class="table table-hover table-striped table-scroll small-first-col">
 
          <thead>
            <tr class="col-sm-12">
              <td width="5%"><b>#</b></td>
              <td width="15%">Name</td>
              <td width="25%">Description</td>
              <td width="15%">List Price</td>
              <td width="15%">Offer Price</td>
              <td width="10%">Stock</td>
              <td width="15%">Action</td>
            </tr>
          </thead>

          <tbody>
            <tr class="col-sm-12" v-for="(product, index) in listProduct" :key="index">
              <td class="5%"><b>{{ index+1 }}</b></td>
              <td class="15%">{{ product.name }}</td>
              <td class="25%">{{ product.description }}</td>
              <td class="15%">{{ getFormattedCurrency(product.listPrice) }}</td>
              <td class="15%">{{ getFormattedCurrency(product.offerPrice) }}</td>
              <td class="10%">{{ product.stock }}</td>
              <td class="15%">
                <b-dropdown variant="outline-primary" size="sm" right name="dropdown">
                  <template slot="button-content"><li class="fa fa-eye"></li> </template>
                  <b-dropdown-item @click="onShowModal(product, index)" name="edit"><li class="fa fa-edit"></li> Edit</b-dropdown-item>
                  <b-dropdown-item v-on:click="onConfirmDelete(product, index)" name="delete"><li class="fa fa-trash"></li> Delete</b-dropdown-item>
                </b-dropdown>
              </td>
            </tr>
          </tbody>

        </table>
    </div>

    <CustomModal v-if="showModalUpd" @close="showModalUpd=false">
      <div slot="header">
        Ubah Product
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
            <b-form-input v-model="form.stock" placeholder="Stock" required/>
          </div>
          
          <div class="row grup-input">
            <b-button type="submit" variant="success" style="width:100%">
              Ubah Data Product
            </b-button>
          </div>
          
          <div style="text-align: right">
            <b-button class="reset-btn" type="reset"> Reset </b-button>
          </div>
        </b-form>
      </div>
    </CustomModal>

    <!-- =============== Form Modal to Add Product ================= -->
    <b-modal ref="modalProductForm" id="modalProductForm" hide-footer>
      <div slot="modal-title" >
        <img id="imgModal" src="@/assets/blibli.jpeg" class="modal-title">
        Tambah Data Baru
      </div>

      <div slot="default">
        <b-form ref="form" @submit.prevent="onHandleSubmit" style="text-align:left" >
          <b-row>
            <b-col sm="3"><label>Nama</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.name" placeholder="Masukkan nama produk" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Deskripsi</label></b-col>
            <b-col sm="9">
              <b-form-textarea v-model="form.description" rows="3" placeholder="Deskripsi produk" required></b-form-textarea>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Harga Awal</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.listPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Harga Akhir</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.offerPrice" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <b-row>
            <b-col sm="3"><label >Stok</label></b-col>
            <b-col sm="9">
              <b-form-input v-model="form.stock" placeholder="0" type="number" required></b-form-input>
            </b-col>
          </b-row><br>
          <div id="r_button">
            <b-button type="submit" variant="success" style="width:100%">
              Ubah Data Product
            </b-button>
          </div>
        </b-form>
        <div style="text-align: right">
            <span @click="resetForm"
                  style="font-size:14px; padding: 0.2em; color: #068aca; font-weight:bold; cursor:pointer;"> Reset
            </span>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script src="./TableProduct.js"></script>

<style>
   #bookBtn{
    padding:0 0.5em 0 0.5em;
    margin-left:0.5em;
  }
</style>
