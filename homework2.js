function formSetEditReport(idReport) {
    var report = {
        'type': ReportPlugin.defaultReportType,
        'format': ReportPlugin.defaultReportFormat,
        'description': '',
        'period': ReportPlugin.defaultPeriod,
        'hour': ReportPlugin.defaultHour,
        'reports': []
    };

    if (idReport > 0) {
        //dependency #1
        //change signature of formSetEditReport to formSetEditReport(report); use report.getId to obtain report id
        report = ReportPlugin.reportList[idReport];
        $('#report_submit').val(ReportPlugin.updateReportString);
    }
    else {
        $('#report_submit').val(ReportPlugin.createReportString);
    }
    //seam #2
    toggleReportType(report.type);

    $('#report_description').html(report.description);
    $('#report_segment').find('option[value=' + report.idsegment + ']').prop('selected', 'selected');
    $('#report_type').find('option[value=' + report.type + ']').prop('selected', 'selected');
    $('#report_period').find('option[value=' + report.period + ']').prop('selected', 'selected');
    $('#report_hour').val(report.hour);
    $('[name=report_format].' + report.type + ' option[value=' + report.format + ']').prop('selected', 'selected');

    $('[name=reportsList] input').prop('checked', false);

    var key;
    for (key in report.reports) {
        $('.' + report.type + ' [report-unique-id=' + report.reports[key] + ']').prop('checked', 'checked');
    }

    //seam #3
    updateReportParametersFunctions[report.type](report.parameters);

    $('#report_idreport').val(idReport);
}