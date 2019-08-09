<template>
  <div name="product-header-button">
    <!-- =============== Dropdown Button to Trigger Modal ================= -->
      <b-dropdown variant="outline-primary" size="sm" right>
          <template slot="button-content"><li class="fa fa-eye"></li> </template>
          <b-dropdown-item @click="showModalUpdate(product, index)"><li class="fa fa-edit"></li> Edit</b-dropdown-item>
          <b-dropdown-item v-on:click="onDelete(product, index)"><li class="fa fa-trash"></li> Delete</b-dropdown-item>
      </b-dropdown>

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
                    Tambah Product
                </b-button>  
            </div>
          </b-form>
          <div style="text-align: right">
            <span @click="onReset" 
              style="font-size:14px; padding: 0.2em; color: #068aca; font-weight:bold; cursor:pointer;"> Reset 
            </span> 
          </div>
      </div> 
    </b-modal>

    <!-- =============== Form Modal to Upload Product ================= -->    
    <b-modal ref="modalBatchUpload" id="modalBatchUpload" hide-footer>
      <div slot="modal-title" > 
        <img id="imgModall" src="@/assets/blibli.jpeg" class="modal-title">
        Upload Data Baru
      </div>

      <div slot="default">
          <b-form @submit="onUpload" ref="formBatch" style="text-align:left" >
              <b-row style="padding:0 1em 0 1em">
                  <b-form-file v-model="file" v-on:change="onChangeFileUpload()" required></b-form-file>
              </b-row><br>
              <div id="r_button2">
                  <b-button type="submit" variant="success" style="width:100%">
                      Upload File
                  </b-button>
              </div>
          </b-form>

          <div style="text-align: right">
            <span @click="onReset"
              style="font-size:14px; padding: 0.2em; color: #068aca; font-weight:bold; cursor:pointer;"> Reset
            </span>
          </div>
      </div> 
    </b-modal>

  </div>
  
</template>

<script src="./ProductModifyDropdown.js"></script>

<style src="./ProductModifyDropdown.css"></style>

