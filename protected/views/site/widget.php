<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name;
?>

<h1>Welcome to <i><?php echo CHtml::encode(Yii::app()->name); ?></i></h1>
<h3>test<?= var_dump($test = Yii::app()->user->isGuest) ?></h3>

<p>Congratulations! You have successfully created your Yii application.</p>

<p>You may change the content of this page by modifying the following two files:</p>
<ul>
<!--    <li>View file: <code>--><?php //echo __FILE__; ?><!--</code></li>-->
<!--    <li>Layout file: <code>--><?php //echo $this->getLayoutFile('main'); ?><!--</code></li>-->
</ul>

<p>For more details on how to further develop this application, please read
    the <a href="http://www.yiiframework.com/doc/">documentation</a>.
    Feel free to ask in the <a href="http://www.yiiframework.com/forum/">forum</a>,
    should you have any questions.</p>

<div class="people-info">
    <table class="table table-striped people-info">
        <thead>
        <tr class="tr-head">
            <td colspan="3">
                <h3 class="head-txt">Personal</h3>
            </td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td class="col-md-11">
                    <div class="w-100">
                        <div class="col-md-4">
                            <div class="firstname">
                                <div class="firstname-view">
                                    <span id="firstname-1">Bala</span>
                                    <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                    <span class="fa fa-edit"></span>
                                </div>
                                <div class="firstname-edit">
                                    <input class="form-control form-control-custom required" maxlength="25" placeholder="first name" type="text" value="Bala">
                                    <span class="danger" id="f-name-error">First Name cannot be left blank</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="col-md-6">
                                <div class="middlename">
                                    <div class="middlename-view">
                                        <span id="middlename-1">123</span>
                                        <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                        <span class="fa fa-edit"></span>
                                    </div>
                                    <div class="middle-edit">
                                        <input class="form-control form-control-custom required" maxlength="25" placeholder="middle name" type="text" value="123">
                                        <span class="danger" id="m-name-error">Middle Name cannot be left blank</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="lastname">
                                    <div class="lastname-view">
                                        <span id="lastname-1">Bala kumar.</span>
                                        <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                        <span class="fa fa-edit"></span>
                                    </div>
                                    <div class="lastname-edit">
                                        <input class="form-control form-control-custom required" maxlength="25" placeholder="last name" type="text" value="Bala kumar.">
                                        <span class="danger" id="l-name-error">Last Name cannot be left blank</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12">
                            <span class="tooltip-custom tooltip-info">You can display your names differently to different users. #71</span>
                        </div>
                    </div>
                </td>
                <td class="col-md-1">
                    <div class="icons icons-view">
                        <div class="action-icons">
                            <span data-toggle="tooltip" title="Save" class="fa fa-save"></span>
                            <span class="fa fa-close" title="Cancel #90"></span>
                            <span class="fa fa-info-circle" title="Info"></span>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="col-md-11">
                    <div class="w-100">
                        <div class="col-md-4">
                            <label for="">Nick Name</label>
                        </div>
                        <div class="col-md-8">
                            <div class="col-md-12">
                                <div class="nickname-view">
                                    <span id="nickname-1">xyz</span>
                                    <span class="icons fa fa-lock" style="color: #3b5998;"></span>
                                </div>
                                <div class="nickname-edit">
                                    <input class="form-control form-control-custom required" maxlength="25" placeholder="nick name" type="text" value="xyz">
                                    <!--                                <span class="danger" id="n-name-error">First Name cannot be left blank</span>-->
                                    <span class="danger" id="n-name-error">Nick Name cannot be left blank</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </td>
                <td class="col-md-1">
                    <div class="icons icons-view">
                        <div class="action-icons">
                            <span class="fa fa-edit" title="Edit"></span>
                            <span data-toggle="tooltip" title="Save" class="fa fa-save"></span>
                            <span data-toggle="tooltip" title="Delete" class="fa fa-trash"></span><br>
                            <span class="fa fa-close" title="Cancel #90"></span>
                            <span class="fa fa-info-circle" title="Info"></span>
                        </div>
                    </div>
                </td>
            </tr>
        <tr>
            <td class="col-md-11">
                <div class="w-100">
                    <div class="col-md-4">
                        <label for="">MyLokal UserId</label>
                    </div>
                    <div class="col-md-8">
                        <div class="userid-view">bala_balak</div>
                    </div>
                    <span class="tooltip-info">
                    </span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-info-circle" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td class="col-md-11">
                <div class="w-100">
                    <div class="col-sm-4">
                        <label for="">Date of Birth</label>
                    </div>
                    <div class="col-sm-8">
                        <div class="birth-view">
                            <div class="col-md-6">
                                <span id="b-month-1">July</span>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                            <div class="col-md-3">
                                <span id="b-date-1">29</span>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                            <div class="col-md-3">
                                <span id="b-year-1">1990</span>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                        </div>
                        <div class="birth-edit">
                            <div class="row">
                                <div class="col-md-6">
                                    <select class="form-control form-control-custom form-control-select" name="month" id="month">
                                        <option value>Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control form-control-custom form-control-select" name="day" id="day">
                                        <option value="">Day</option>
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29" selected="">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div class="col-md-3 pl-0">
                                    <select id="year" class="form-control form-control-custom form-control-select" name="year">
                                        <option value="">Year</option>
                                        <?php for($i = 2004; $i >= 1920; $i--): ?>
                                            <option value="<?= $i ?>"><?= $i ?></option>
                                        <?php endfor; ?>
                                    </select>
                                </div>
                            </div>
                            <span class="danger" id="dob-error">Please choose the complete date as a your birthday</span>
                            <span class="danger" id="dob-wrong">It look like you have entered the wrong info. Please make sure that you use real date of birth.</span>
                            <span class="danger" id="dob-young">We are in process of developing this platform for younger people like you but are not ready currently. We regret inconvenience.</span>
                            <span class="danger" id="dob-failed">Could not store date of birth. please try again.</span>
                        </div>
                    </div>
                    <span class="tooltip-info"></span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-edit" title="Edit"></span>
                        <span data-toggle="tooltip" title="Save" class="fa fa-save"></span>
                        <span class="fa fa-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td class="col-md-11">
                <div class="w-100">
                    <div class="col-md-4">
                        <label for="">About Me</label>
                    </div>
                    <div class="col-md-8">
                        <div class="aboutme-view">
                            <span id="aboutme-1">This is all about how great I am at this site.....</span>
                            <span class="icons fa fa-lock privacy_icon"></span>
                        </div>
                        <div class="aboutme-edit">
                            <textarea class="form-control form-control-textarea required"
                                      maxlength="200" name="aboutme" id="aboutme-edit"
                                      placeholder="Comments max 200 characters"
                                      rows="5"
                            >This is all about how great I am at this site....
                            </textarea>
                            <span class="aboutme-limit">
                                <span id="chars-sum">200</span>
                                <span id="remaining-txt">characters remaining #92</span>
                            </span>
                        </div>
                    </div>
                </div>
                <span class="tooltip-custom tooltip-info">
                    Your brief Introduction to MyLokal Community #79
                </span>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-edit" title="Edit"></span>
                        <span data-toggle="tooltip" title="Save" class="fa fa-save"></span>
                        <span class="fa fa-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td class="col-md-11">
                <div class="w-100">
                    <div class="col-md-4">
                        <label>Relationship Status</label>
                    </div>
                    <div class="col-md-8">
                        <div class="relation-view">
                            <span id="relation-1">Divorced</span>
                            <span class="icons fa fa-lock" style="color: #3b5998;"></span>
                        </div>
                        <div class="relation-edit">
                            <select id="relationStatus" class="form-control form-control-select filter-select" name="relationStatus">
                                <option value="316">---</option>
                                <option value="317">Single</option>
                                <option value="318">In a relationship</option>
                                <option value="319">Engaged</option>
                                <option value="320">Married</option>
                                <option value="321">In a civil union</option>
                                <option value="322">In a domestic partnership</option>
                                <option value="323">In a open relationship</option>
                                <option value="324">Its complicated</option>
                                <option value="325">Separated</option>
                                <option value="326" selected="">Divorced</option>
                                <option value="327">Widowed</option>
                            </select>
                            <span class="danger" id="relation-error">Please select your relationship status</span>
                        </div>
                    </div>
                </div>
                <span class="tooltip-custom tooltip-info">
                    Your brief Introduction to MyLokal Community #79
                </span>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-edit" title="Edit"></span>
                        <span data-toggle="tooltip" title="Delete" class="fa fa-trash"></span><br>
                        <span data-toggle="tooltip" title="Save" class="fa fa-save"></span>
                        <span class="fa fa-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td class="col-md-11">
                <div class="w-100">
                    <div class="col-md-4">
                        <label for="">Keywords</label>
                    </div>
                    <div class="col-md-8">
                        <div class="keywords-view">
                            <span id="keywords">Keywords</span>
                        </div>
                        <div class="keywords-edit">
                            <div>
                                <input type="text" class="form-control form-control-custom" placeholder="Click here to add new tag" maxlength="25">
                                <span class="danger"></span>
                            </div>
                        </div>
                    </div>
                    <span class="tooltip-custom tooltip-info">
                        Your brief Introduction to MyLokal Community #79
                    </span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-edit" title="Edit"></span>
                        <span class="fa fa-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>