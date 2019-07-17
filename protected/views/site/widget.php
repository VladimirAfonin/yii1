<?php
/* @var $this SiteController */

$this->pageTitle=Yii::app()->name;
?>
<h3><?php $guest = Yii::app()->user->isGuest ?></h3>
<div class="people-info hidden">
    <table class="table table-striped people-info" id="widget-table">
        <thead>
        <tr class="tr-head">
            <td colspan="3">
                <p class="head-txt" style="margin: 0;">Personal</p>
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
                                <span id="firstname-1">
                                    Restricted
                                </span>
                                <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                <?php if(!$guest): ?>
                                    <span class="fa fa-edit" id="firstname-edit"></span>
                                <?php endif; ?>
                            </div>
                            <div class="firstname-edit hidden">
                                <input class="form-control form-control-custom required" id="fname-input" maxlength="25" placeholder="first name" type="text" value="">
                                <span class="danger hidden" id="f-name-error">First Name cannot be left blank</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="w-100">
                            <div class="col-md-6 nopadding">
                                <div class="middlename">
                                    <div class="middlename-view">
                                        <?php if($guest) : ?>
                                            <span id="middlename-restrict" class="danger">
                                            Restricted
                                        </span>
                                        <?php else: ?>
                                            <span id="middlename-1">
                                                Restricted
                                            </span>
                                        <?php endif; ?>
                                        <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                        <?php if(!$guest): ?>
                                            <span class="fa fa-edit" id="middlename-edit"></span>
                                        <?php endif; ?>
                                    </div>
                                    <div class="middle-edit hidden">
                                        <input class="form-control form-control-custom required" id="middlename-input" maxlength="25" placeholder="middle name" type="text" value="">
                                        <span class="danger hidden" id="m-name-error">Middle Name cannot be left blank</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 nopadding">
                                <div class="lastname">
                                    <div class="lastname-view">
                                        <?php if($guest) : ?>
                                            <span id="lastname-restrict" class="danger">
                                            Restricted
                                        </span>
                                        <?php else: ?>
                                            <span id="lastname-1">
                                                Restricted
                                            </span>
                                        <?php endif; ?>
                                        <span style="color: #c00;" class="icons fa fa-lock privacy_icon"></span>
                                        <?php if(!$guest): ?>
                                            <span class="fa fa-edit" id="lastname-edit"></span>
                                        <?php endif; ?>
                                    </div>
                                    <div class="lastname-edit hidden">
                                        <input class="form-control form-control-custom required" id="lastname-input" maxlength="25" placeholder="last name" type="text" value="Bala kumar.">
                                        <span class="danger hidden" id="l-name-error">Last Name cannot be left blank</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="confirmation hidden" id="f-name-change">Current changes not yet saved. Are you sure want to cancel this change?
                        <span class="yes" id="firstname-yes"><i class="fa fa-check"></i></span>
                        <span class="no" id="firstname-cancel-no"><i class="fa fa-close"></i></span>
                    </span>
                </div>
                <div class="col-md-12">
                    <span class="tooltip-custom tooltip-info hidden" id="firstname-info-view"></span>
                    <span class="tooltip-custom tooltip-info yes hidden" id="firstname-info-save">Successfully saved!</span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span data-toggle="tooltip" title="Save" id="firstname-save" class="fa fa-save hidden"></span>
                        <span class="fa fa-close hidden " id="firstname-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle show-actions" id="firstname-info" title="Info"></span>
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
                        <div class="col-md-12 nopadding">
                            <div class="nickname-view">
                                <?php if($guest) : ?>
                                <span id="nickname-restrict" class="danger">
                                    Restricted
                                </span>
                                <?php else: ?>
                                <span id="nickname-1">
                                    Restricted
                                </span>
                                <?php endif; ?>
                                <span class="icons fa fa-lock" style="color: #3b5998;"></span>
                            </div>
                            <div class="nickname-edit hidden">
                                <input class="form-control form-control-custom required" id="nickname-input" maxlength="25" placeholder="nick name" type="text" value="">
                                 <span class="danger hidden" id="n-name-error">First Name cannot be left blank</span>
                            </div>
                        </div>
                    </div>
                    <span class="confirmation hidden" id="n-name-change">Current changes not yet saved. Are you sure want to cancel this change?
                        <span class="yes" id="nickname-yes"><i class="fa fa-check"></i></span>
                        <span class="no" id="nickname-cancel-no"><i class="fa fa-close"></i></span>
                    </span>
                </div>
                <div class="clear">
                </div>
               <div class="w-100 text-left col-md-12">
                    <span class="tooltip-custom tooltip-info hidden w-100" id="nickname-info-view"></span
                </div>
                <span class="tooltip-custom tooltip-info yes hidden" id="nickname-info-save">Successfully saved!</span>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <?php if(!$guest): ?>
                            <span class="fa fa-edit show-actions" id="nickname-edit" title="Edit"></span>
                            <span data-toggle="tooltip" title="Delete" id="nickname-trash" class="fa fa-trash show-actions"></span>
                            <span data-toggle="tooltip" title="Save" class="fa fa-save hidden" id="nickname-save"></span>
                        <?php endif; ?>
                        <span class="fa fa-close hidden show-actions" id="nickname-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle  show-actions" id="nickname-info" title="Info"></span>
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
                </div>
                <div class="col-md-12">
                    <span class="tooltip-custom tooltip-info hidden" id="mylokal-info-view"></span
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <span class="fa fa-info-circle  show-actions" id="mylocal-info" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td class="col-sm-11">
                <div class="w-100">
                    <div class="col-sm-2">
                        <label for="">Date of Birth</label>
                    </div>
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="birth-view">
                            <div class="col-xs-6 nopadding">
                                <?php if($guest): ?>
                                    <span id="b-month-1-restricted" class="danger">Restricted</span>
                                <?php else: ?>
                                    <span id="b-month-1">July</span>
                                <?php endif;?>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                            <div class="col-xs-3 nopadding">
                                <span id="b-date-1">06</span>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                            <div class="col-xs-3 nopadding">
                                <span id="b-year-1" style="padding-left: 7px;!important;">1989</span>
                                <span style="color: #3b5998;" class="icons fa fa-lock"></span>
                            </div>
                        </div>
                        <div class="birth-edit hidden">
                            <div class="row">
                                <div class="col-sm-6 margin-select">
                                    <select class="form-control padding-select form-control-custom form-control-select" name="month" id="month">
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
                                <div class="col-sm-3 margin-select day">
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
                                <div class="col-sm-3 pl-0 margin-select year">
                                    <select id="year" class="form-control form-control-custom form-control-select" name="year">
                                        <option value="">Year</option>
                                        <?php for($i = 2004; $i >= 1920; $i--): ?>
                                            <option value="<?= $i ?>"><?= $i ?></option>
                                        <?php endfor; ?>
                                    </select>
                                </div>
                            </div>
                            <span class="danger hidden" id="dob-error">Please choose the complete date as a your birthday</span>
                            <span class="danger hidden" id="dob-wrong">It look like you have entered the wrong info. Please make sure that you use real date of birth.</span>
                            <span class="danger hidden" id="dob-young">We are in process of developing this platform for younger people like you but are not ready currently. We regret inconvenience.</span>
                            <span class="danger hidden" id="dob-failed">Could not store date of birth. please try again.</span>
                        </div>
                    </div>
                        <span class="confirmation hidden" id="b-name-change">Current changes not yet saved. Are you sure want to cancel this change?
                        <span class="yes" id="birthday-yes"><i class="fa fa-check"></i></span>
                        <span class="no" id="birthday-cancel-no"><i class="fa fa-close"></i></span>
                    </span>
                </div>
                <div class="col-sm-12">
                    <span class="tooltip-custom tooltip-info hidden" id="birth-info-view"></span>
                    <span class="tooltip-custom tooltip-info yes hidden" id="birth-info-save">Successfully saved!</span>
                </div>
            </td>
            <td class="col-sm-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <?php if(!$guest): ?>
                            <span class="fa fa-edit show-actions" id="birth-edit" title="Edit"></span>
                        <?php endif;?>
                        <span data-toggle="tooltip" title="Save" id="birth-save" class="fa fa-save hidden"></span>
                        <span class="fa fa-close hidden " id="birth-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle  show-actions" id="birth-info" title="Info"></span>
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
                        <div class="aboutme-edit hidden">
                            <textarea class="form-control form-control-textarea required"
                                      maxlength="200" name="aboutme"
                                      placeholder="Comments max 200 characters"
                                      rows="5"
                                      id="aboutme-input"
                                      onkeyup="content_length()"
                            >
                            </textarea>
                            <span class="aboutme-limit">
                                <span id="chars-sum"></span>
                                <span id="remaining-txt">characters remaining</span>
                                <span id="aboutme-error" class="danger hidden">Maximum 200 symbols are allowed</span>
                                <span class="danger hidden" id="aboutme-empty-error">About me cannot be left blank</span>
                            </span>
                        </div>
                    </div>
                    <span class="confirmation hidden" id="aboutme-name-change">Current changes not yet saved. Are you sure want to cancel this change?
                        <span class="yes" id="aboutme-yes"><i class="fa fa-check"></i></span>
                        <span class="no" id="aboutme-cancel-no"><i class="fa fa-close"></i></span>
                    </span>
                </div>
                <div class="col-md-12">
                    <span class="tooltip-custom tooltip-info hidden" id="aboutme-info-view"></span>
                    <span class="tooltip-custom tooltip-info yes hidden" id="aboutme-info-save">Successfully saved!</span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <?php if(!$guest): ?>
                            <span class="fa fa-edit show-actions" id="aboutme-edit" title="Edit"></span>
                        <?php endif; ?>
                        <span data-toggle="tooltip" title="Save" id="aboutme-save" class="fa fa-save hidden"></span>
                        <span class="fa fa-close hidden " id="aboutme-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle show-actions" id="aboutme-info" title="Info"></span>
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
                            <?php if($guest): ?>
                                <span id="relation-1-restricted" class="danger">Restricted</span>
                            <?php else: ?>
                                <span id="relation-1">July</span>
                            <?php endif;?>
                            <span class="icons fa fa-lock" style="color: #3b5998;"></span>
                        </div>
                        <div class="relation-edit hidden">
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
                                <option value="326">Divorced</option>
                                <option value="327">Widowed</option>
                            </select>
                            <span class="danger hidden" id="relation-error">Please select your relationship status</span>
                        </div>
                    </div>
                    <span class="confirmation hidden" id="relation-name-change">Current changes not yet saved. Are you sure want to cancel this change?
                        <span class="yes" id="relation-yes"><i class="fa fa-check"></i></span>
                        <span class="no" id="relation-cancel-no"><i class="fa fa-close"></i></span>
                    </span>
                </div>
                <div class="col-md-12">
                    <span class="tooltip-custom tooltip-info hidden" id="relation-info-view"></span>
                    <span class="tooltip-custom tooltip-info yes hidden" id="relation-info-save">Successfully saved!</span>
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <?php if(!$guest): ?>
                        <span class="fa fa-edit show-actions" id="relation-edit" title="Edit"></span>
                        <span data-toggle="tooltip" title="Delete" id="relation-trash" class="fa fa-trash show-actions"></span>
                        <?php endif; ?>
                        <span data-toggle="tooltip" title="Save" id="relation-save" class="fa fa-save hidden"></span>
                        <span class="fa fa-close hidden " id="relation-close" title="Cancel #90"></span>
                        <span class="fa fa-info-circle show-actions" id="relation-info" title="Info"></span>
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
                            <?php if($guest): ?>
                                <span id="keywords-restricted" class="danger">Restricted</span>
                            <?php else: ?>
                                <span id="keywords">July</span>
                            <?php endif;?>
                        </div>
                        <div class="keywords-edit hidden">
                            <div>
                                <input type="text" class="form-control form-control-custom" placeholder="Click here to add new tag" maxlength="25">
                                <span class="danger hidden"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                     <span class="tooltip-custom tooltip-info hidden" id="keywords-info-view">
                </div>
            </td>
            <td class="col-md-1">
                <div class="icons icons-view">
                    <div class="action-icons">
                        <?php /*if(!$guest): */?><!--
                            <span class="fa fa-edit show-actions" id="keywords-edit" title="Edit"></span>
                        --><?php /*endif; */?>
<!--                        <span class="fa fa-close hidden " id="keywords-close" title="Cancel #90"></span>-->
                        <span class="fa fa-info-circle show-actions" id="keywords-info" title="Info"></span>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>