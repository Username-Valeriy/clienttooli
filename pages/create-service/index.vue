<template>
    <div class="page content">
        <div class="title-box">
            <h1 class="title-h1">Бесплатно добавим ваш сервис в каталог</h1>
        </div>
        <div class="page-box">
            <div class="cr-service">
                <el-steps :active="active">
                    <el-step></el-step>
                    <el-step></el-step>
                    <el-step></el-step>
                </el-steps>
                <form @submit="formSubmit" ref="form" enctype="multipart/form-data">
                    <div class="step-box" v-if="active === 0">
                        <h2 class="title-h2">О компании</h2>

                        <div class="cr-service-form">
                            <div class="t-control box-control">
                                <span class="t-label">Название сервиса*</span>
                                <input type="text" class="t-input" v-model="title" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Ссылка на ваш сервис или программу*</span>
                                <input type="text" class="t-input" v-model="linkSite" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Ваше имя*</span>
                                <input type="text" class="t-input" v-model="name" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Ваша фамилия*</span>
                                <input type="text" class="t-input" v-model="surname" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Email на домене вашего сервиса*</span>
                                <input type="text" class="t-input" v-model="email" />
                            </div>
                        </div>


                    </div>

                    <div class="step-box" v-if="active === 1">
                        <h2 class="title-h2">О продукте</h2>
                        <div class="cr-service-form">
                            <div class="t-control box-control">
                                <span class="t-label">Категория*</span>
                                <el-select v-model="cat"
                                           multiple
                                           filterable
                                           default-first-option
                                           placeholder="Выбрать категорию"
                                           class="t-select">
                                    <el-option-group
                                        v-for="group in categoryAll"
                                        :key="group.label"
                                        :label="group.label">
                                        <el-option
                                            v-for="item in group.categoryAll"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-option-group>
                                </el-select>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Краткое описание</span>
                                <el-input
                                    type="textarea"
                                    :rows="2"
                                    :autosize="{ minRows: 2, maxRows: 6}"
                                    v-model="desc">
                                </el-input>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Описание *</span>
                                <TuiEditor
                                    mode="markdown"
                                    preview-style="vertical"
                                    height="300px"
                                    v-model="content"
                                />
                            </div>
                            <div class="control-flex">
                                <div class="t-control box-control">
                                    <span class="t-label">Видео</span>
                                    <input type="text"
                                           class="t-input"
                                           placeholder="Ссылка на видео"
                                           v-model="linkVideo" />
                                </div>
                                <div class="t-control t-upload upload-box">
                                    <div class="t-upload-box">
                                        <div class="t-upload-icon"></div>
                                        <div class="t-upload-label">Выбрат файл</div>
                                        <div class="t-upload-btn full">Загрузить</div>
                                    </div>
                                </div>
                            </div>
                            <div class="control-flex t-control t-upload box-control t-control-border">
                                <div class="full-width">
                                    <span class="t-label">Логотип</span>
                                    <div class="t-upload-box">
                                        <div class="t-upload-icon"></div>
                                        <div class="t-upload-label">Выбрат файл</div>
                                        <div class="t-upload-btn" @click="uploadLogo">Загрузить</div>
                                    </div>
                                    <input type="file" id="imageLogo" class="hidden" v-on:change="onImageChangeLogo" />
                                </div>
                                <div class="t-progress" v-bind:class="{load: progressUpload}">
                                    <div class="t-progress-line"></div>
                                    <div class="t-progress-text">Загружено</div>
                                </div>
                            </div>
                            <div class="t-control t-upload box-control t-control-border">
                                <span class="t-label">Интерфейс <span class="t-label_small">(скрины продукта)</span></span>
                                <div class="t-upload-box">
                                    <div class="t-upload-icon"></div>
                                    <div class="t-upload-label">Выбрат файл</div>
                                    <div class="t-upload-btn" @click="uploadImages">Загрузить</div>
                                </div>
                                <input type="file" id="interface" class="hidden" v-on:change="onImageChange" multiple />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Бесплатный тариф</span>
                                <el-checkbox v-model="freeRate">
                                    <span v-if="freeRate === true">Да</span>
                                    <span v-else>Нет</span>
                                </el-checkbox>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Пробный период</span>
                                <el-checkbox v-model="testPeriod">
                                    <span v-if="testPeriod === true">Да</span>
                                    <span v-else>Нет</span>
                                </el-checkbox>
                            </div>

                            <div class="t-control box-control" v-if="testPeriod">
                                <span class="t-label">Пробный период*</span>
                                <div class="grid g-two">
                                    <input type="text"
                                           class="t-input"
                                           placeholder="Указать дату"
                                           v-model="testPeriodDate" />
                                    <input type="text"
                                           class="t-input"
                                           placeholder="Ссылка на пробный период"
                                           v-model="testPeriodLink" />
                                </div>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Цена*</span>
                                <div class="t-flex-control">
                                    <span class="t-label_small">от</span>
                                    <input type="text" class="t-input" v-model="priceStart" />
                                </div>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Доступные языки</span>
                                <el-select
                                    v-model="languages"
                                    multiple
                                    filterable
                                    allow-create
                                    default-first-option
                                    placeholder="Выберите"
                                    class="t-select gray">
                                    <el-option
                                        v-for="item in languagesData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Подойдет для:*</span>
                                <div class="box-control-child">
                                    <span class="t-label label-t1">Отрасли:</span>
                                    <el-select v-model="industries" placeholder="Выбор отрасли" class="t-select">
                                        <el-option-group
                                            v-for="group in industriesAll"
                                            :key="group.label"
                                            :label="group.label">
                                            <el-option
                                                v-for="item in group.industriesAll"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-option-group>
                                    </el-select>
                                </div>
                                <div class="box-control-child">
                                    <span class="t-label label-t1">Бизнес:</span>
                                    <el-checkbox-group v-model="business">
                                        <el-checkbox label="Маленький"></el-checkbox>
                                        <el-checkbox label="Средний"></el-checkbox>
                                        <el-checkbox label="Крупный"></el-checkbox>
                                    </el-checkbox-group>
                                </div>
                                <div class="box-control-child">
                                    <span class="t-label label-t1">Бизнес для:</span>
                                    <el-checkbox-group v-model="businessFor">
                                        <el-checkbox label="Бизнеса"></el-checkbox>
                                        <el-checkbox label="Потребителя"></el-checkbox>
                                    </el-checkbox-group>
                                </div>
                                <el-select
                                    v-model="professions"
                                    multiple
                                    filterable
                                    allow-create
                                    default-first-option
                                    placeholder="Для кого ваш сервис?"
                                    class="t-select many">
                                    <el-option
                                        v-for="item in whom"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <div class="step-box" v-if="active === 2">
                        <h2 class="title-h2">Завершение</h2>
                        <div class="cr-service-form">
                            <div class="add-box">
                                <div class="control-add" v-for="item in features">
                                    <div class="t-control box-control t-flex-control">
                                        <div class="input-box">
                                            <span class="t-label">Особенности и возможности вашего сервиса</span>
                                            <input type="text" class="t-input" v-model="item.title" />
                                        </div>
                                        <div class="t-button control-add-btn"
                                             @click="addFeatures"></div>
                                    </div>
                                    <div class="t-control box-control">
                                        <span class="t-label">Введите список возможностей*</span>
                                        <el-select
                                            v-model="item.list"
                                            multiple
                                            filterable
                                            allow-create
                                            default-first-option
                                            placeholder="Добавьте список"
                                            class="t-select many">
                                            <el-option
                                                v-for="item in featuresItems"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="t-control-or box-control"><span></span><span>или</span><span></span></div>
                                    <div class="t-control box-control">
                                        <span class="t-label">Введите описание возможностей</span>
                                        <el-input
                                            type="textarea"
                                            :rows="2"
                                            :autosize="{ minRows: 2, maxRows: 6}"
                                            v-model="item.desc">
                                        </el-input>
                                    </div>
                                </div>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Система на которую устанавливается</span>
                                <el-select
                                    v-model="systemInstall"
                                    multiple
                                    filterable
                                    default-first-option
                                    placeholder="Выбрать"
                                    class="t-select">
                                    <el-option
                                        v-for="item in systemInstallAll"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <!--                        <div class="t-control box-control">-->
                            <!--                            <span class="t-label">Особенности и возможности</span>-->
                            <!--                            <input type="text" class="t-input" v-model="features" />-->
                            <!--                        </div>-->
                            <div class="t-control box-control">
                                <span class="t-label">Поддержка</span>
                                <el-radio v-model="isSupport" class="check" label="1">Есть</el-radio>
                                <el-radio v-model="isSupport" class="check" label="2">Нету</el-radio>
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Кейсы</span>
                                <input type="text" class="t-input" placeholder="Вставьте ссылку"
                                       v-model="linkCases" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">Инструкция по использованию</span>
                                <input type="text" class="t-input" placeholder="Вставьте ссылку"
                                       v-model="linkInstructions" />
                            </div>
                            <div class="t-control box-control">
                                <span class="t-label">API</span>
                                <input type="text" class="t-input" placeholder="Вставьте ссылку"
                                       v-model="linkAPI" />
                            </div>
                        </div>
                    </div>

                    <div class="step-action">
                        <button
                        v-if="active > 0"
                        type="button"
                        class="t-button t-prev"
                        @click="prev">Назад</button>
                        <button type="button" class="t-button t-next"  @click="next">Далее</button>
                    </div>
                    <button class="hidden" id="sub_create">Submit</button>

                </form>
                {{output}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "create-service",
        data() {
            return {
                active: 0,
                title: '',
                linkSite: '',
                name: '',
                surname: '',
                email: '',

                category_id: [],
                cat: [],
                image1: [],
                logo: '',
                progressUpload: false,

                content: '',
                desc: '',
                linkVideo: '',
                freeRate: '',
                testPeriod: '',
                testPeriodDate: '',
                testPeriodLink: '',
                priceStart: '',
                languages: [],
                languagesItems: [{
                    value: 'russian', label: 'Русский'},
                    {value: 'english', label: 'Английский'}],
                business: [],
                businessFor: [],
                industries: [],

                features: [
                    {id: 1, title: '', list: [], desc: ''}
                ],

                featuresItems: [{
                    value: 'Оценки', label: 'Оценки'},
                    {value: 'Crm', label: 'Crm'}],
                systemInstall: [],

                professions: [],
                whom: [{
                    value: 'Менеджер', label: 'Менеджер'},
                    {value: 'Малый бизнес', label: 'Малый бизнес'}],
                isSupport: '',
                linkCases: '',
                linkAPI: '',
                linkInstructions: '',


                output: ''

            }
        },
        methods: {
            formSubmit(e) {

                //this.addNewCategories();

                e.preventDefault();
                let currentObj = this;
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append('title', this.title);
                formData.append('linkSite', this.linkSite);
                formData.append('name', this.name);
                formData.append('surname', this.surname);
                formData.append('email', this.email);
                formData.append('cat', this.cat);
                // formData.append('category_id', this.category_id);
                formData.append('content', this.content);
                formData.append('desc', this.desc);
                formData.append('linkVideo', this.linkVideo);
                formData.append('logo', this.logo);
                for( let i = 0; i < this.image1.length; i++ ){
                    let file = this.image1[i];
                    formData.append('image' + i, file);
                }
                formData.append('freeRate', this.freeRate);
                formData.append('testPeriodDate', this.testPeriodDate);
                formData.append('testPeriodLink', this.testPeriodLink);

                formData.append('priceStart', this.priceStart);
                formData.append('languages', this.languages);
                formData.append('business', this.business);
                formData.append('businessFor', this.businessFor);
                formData.append('features', JSON.stringify(this.features));
                formData.append('systemInstall', this.systemInstall);
                formData.append('professions', this.professions);
                formData.append('isSupport', this.isSupport);
                formData.append('linkCases', this.linkCases);
                formData.append('linkAPI', this.linkAPI);
                formData.append('linkInstructions', this.linkInstructions);
                formData.append('industries', this.industries);
                //formData.append('socials', this.socials);
                let uri = process.env.baseUrl + `services/create`;
                axios.post(uri,formData, config)
                    .then(function (response) {
                        currentObj.output = response.data;
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
                this.clearForm()
            },
            // addNewCategories(){
            //     for(let i=0;i<this.category_id.length;i++){
            //         if(typeof  this.category_id[i] === 'string'){
            //             for(let y=0;y<this.categories.length;y++){
            //                 if(this.category_id[i] === this.categories[y].title){
            //                     this.category_id[i] = this.categories[y].id
            //                 }
            //             }
            //         }
            //     }
            // },
            // changeCategories(e){
            //     let uri = process.env.baseUrl + `services/categories/create`;
            //     let lastEl = e[e.length - 1];
            //     if(typeof  lastEl === 'string'){
            //         axios.post(uri, {
            //             title: lastEl
            //         })
            //     }
            //     for(let i=0;i<2;i++){
            //         this.$store.dispatch('data/category/GET_CATEGORIES')
            //     }
            //     this.addNewCategories()
            // },

            addFeatures(){
                let currentLength = this.features.length + 1;
                this.features.push({id: currentLength, title: '', list: [], desc: ''})
            },
            next() {
                if(this.active === 0){
                    //company

                }
                if(this.active === 1){
                    //product

                }
                if(this.active === 2){
                    //finish step
                    document.getElementById('sub_create').click();
                }
                if (this.active++ > 2) this.active = 0;
            },
            prev(){
                this.active--
            },
            uploadImages(){
                const actionUpload = document.getElementById('interface');
                actionUpload.click();
            },
            uploadLogo(){
                const actionUploadLogo = document.getElementById('imageLogo');
                actionUploadLogo.click();
                this.progressUpload = false;
            },
            onImageChange(e){
                for (let i=0; i<e.target.files.length; i++) {
                    this.image1.push(e.target.files[i])
                }
            },
            onImageChangeLogo(e){
                this.logo = e.target.files[0];
                this.progressUpload = true;
            },
            clearForm(){
                    this.title = '',
                    this.linkSite = '',
                    this.name = '',
                    this.surname = '',
                    this.email = '',

                   // this.category_id = [],
                    this.cat = [],
                    this.image1 = [],
                    this.logo = '',
                    this.progressUpload = false,

                    this.content = '',
                    this.desc = '',
                    this.linkVideo = '',
                    this.freeRate = '',
                    this.testPeriod = '',
                    this.testPeriodDate = '',
                    this.testPeriodLink = '',
                    this.priceStart = '',

                    this.languages = [],
                    this.business = [],
                    this.businessFor = [],

                    this.features = [
                    {id: 1, title: '', list: [], desc: ''}
                ],

                    this.systemInstall = [];
                    this.professions = [];
                    this.isSupport = '';
                    this.linkCases = '';
                    this.linkAPI = '';
                    this.linkInstructions = '';
                    this.output = '';
            },
        },
        mounted() {

        },
        computed: {
            // categories() {
            //     return this.$store.state.data.category.categories;
            // },
            systemInstallAll() {
                return this.$store.state.data.others.systemInstall;
            },
            industriesAll() {
                return this.$store.state.data.industries.industriesAll;
            },
            categoryAll() {
                return this.$store.state.data.category_data.categoryAll;
            },
            languagesData() {
                return this.$store.state.data.languages.languagesData;
            }
        }
    }
</script>

<style scoped>

</style>
