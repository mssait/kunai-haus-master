package com.hionstudios.kunaihaus.flow;

import java.util.HashMap;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.Handler;
import com.hionstudios.db.SqlCriteria;
import com.hionstudios.db.SqlQuery;
import com.hionstudios.db.SqlUtil;
import com.hionstudios.iam.UserUtil;
import com.hionstudios.kunaihaus.model.Subscription;
import com.hionstudios.time.TimeUtil;

public class SubscriptionFlow {
        public MapResponse allSubscriptions(DataGridParams params) {
                String sql = "Select Subscriptions.Id, Subscriptions.Id \"Action\", Companies.Name Company, Subscriptions.Start_Date \"Start Date\", Subscriptions.End_Date \"End Date\", Subscriptions.Time \"Subscribed Time\", Case When To_Timestamp(End_Date/1000) at Time Zone 'Asia/Kolkata' >= Now() at Time Zone 'Pacific/Port_Moresby' Then 'Active' Else 'Inactive' End Status From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";
                String count = "Select Count(*) From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";

                HashMap<String, String> mapping = new HashMap<>(3);
                mapping.put("Start Date", "Subscriptions.Start_Date");
                mapping.put("End Date", "Subscriptions.End_Date");
                mapping.put("Subscribed Time", "Subscriptions.Time");

                for (int i = 0; i < params.filterColumn.length; i++) {
                        params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
                }

                String[] columns = {
                                "Action",
                                "Company",
                                "Start Date",
                                "End Date",
                                "Subscribed Time",
                                "Status"
                };

                SqlCriteria criteria = SqlUtil.constructCriteria(params, null, true);
                SqlCriteria filter = SqlUtil.constructCriteria(params);

                return Handler.toDataGrid(
                                new SqlQuery(sql, criteria),
                                new SqlQuery(count, filter),
                                columns);
        }

        public MapResponse mySubscriptions(DataGridParams params) {
                String sql = "Select Subscriptions.Id, Companies.Name Company, Subscriptions.Start_Date \"Start Date\", Subscriptions.End_Date \"End Date\", Subscriptions.Time \"Subscribed Time\", Case When To_Timestamp(End_Date/1000) at Time Zone 'Asia/Kolkata' >= Now() at Time Zone 'Pacific/Port_Moresby' Then 'Active' Else 'Inactive' End Status From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";
                String count = "Select Count(*) From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";

                HashMap<String, String> mapping = new HashMap<>(3);
                mapping.put("Start Date", "Subscriptions.Start_Date");
                mapping.put("End Date", "Subscriptions.End_Date");
                mapping.put("Subscribed Time", "Subscriptions.Time");

                for (int i = 0; i < params.filterColumn.length; i++) {
                        params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
                }

                String[] columns = {
                                "Company",
                                "Start Date",
                                "End Date",
                                "Subscribed Time",
                                "Status"
                };

                String companySql = "Select Company_Id From Users Where Id = ?";
                long companyId = Handler.getLong(companySql, UserUtil.getUserid());
                SqlCriteria customCriteria = new SqlCriteria("Subscriptions.Company_Id = ?", companyId);

                SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
                SqlCriteria filter = SqlUtil.constructCriteria(params);

                return Handler.toDataGrid(
                                new SqlQuery(sql, criteria),
                                new SqlQuery(count, filter),
                                columns);
        }

        public MapResponse subscription(long id) {
                String sql = "Select * From Subscriptions Where Id = ?";
                return Handler.findFirst(sql, id);
        }

        public MapResponse editSubscription(long id,
                        long start_date,
                        long end_date,
                        String description,
                        String method,
                        double amount,
                        String payment_date,
                        String reference_no,
                        String bank,
                        String branch) {
                Subscription subscription = Subscription.findById(id);
                subscription.set("start_date", start_date);
                subscription.set("end_date", end_date);
                subscription.set("description", description);
                subscription.set("method", method);
                subscription.set("amount", amount);
                subscription.set("payment_date", TimeUtil.parse(payment_date, "yyyy-MM-DD"));
                subscription.set("reference_no", reference_no);
                subscription.set("bank", bank);
                subscription.set("branch", branch);
                return subscription.saveIt() ? MapResponse.success() : MapResponse.failure();
        }

        public MapResponse activeSubscriptions(DataGridParams params) {
                long time = TimeUtil.currentTime();

                String sql = "Select Subscriptions.Id, Companies.Name Company, Subscriptions.Start_Date \"Start Date\", Subscriptions.End_Date \"End Date\", Subscriptions.Time \"Subscribed Time\", Subscriptions.Description, Subscriptions.Method, Subscriptions.Amount From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";
                String count = "Select Count(*) From Subscriptions Join Companies On Companies.Id = Subscriptions.Company_Id";

                HashMap<String, String> mapping = new HashMap<>(3);
                mapping.put("Start Date", "Subscriptions.Start_Date");
                mapping.put("End Date", "Subscriptions.End_Date");
                mapping.put("Subscribed Time", "Subscriptions.Time");

                for (int i = 0; i < params.filterColumn.length; i++) {
                        params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
                }

                String[] columns = {
                                "Company",
                                "Start Date",
                                "End Date",
                                "Subscribed Time",
                                "Description",
                                "Method",
                                "Amount"
                };
                SqlCriteria customCriteria = new SqlCriteria(
                                "? Between Subscriptions.Start_Date And Subscriptions.End_Date",
                                time);
                SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
                SqlCriteria filter = SqlUtil.constructCriteria(params);

                return Handler.toDataGrid(
                                new SqlQuery(sql, criteria),
                                new SqlQuery(count, filter),
                                columns);
        }

        public MapResponse inactiveSubscriptions(DataGridParams params) {
                long time = TimeUtil.currentTime();

                String sql = "Select Companies.Id, Companies.Id \"Action\", Companies.Name Company, Company_Types.Type \"Company Type\", Subscriptions.Start_Date \"Start Date\", Subscriptions.End_Date \"End Date\", Subscriptions.Time \"Subscribed Time\", Subscriptions.Description, Subscriptions.Method, Subscriptions.Amount From Companies Join Company_Types On Company_Types.Id = Companies.Type_Id Left Join Subscriptions On Companies.Id = (Select Subscriptions.Company_Id From Subscriptions Where Subscriptions.Company_Id = Companies.Id Limit 1)";
                String count = "Select Count(*) From Companies Join Company_Types On Company_Types.Id = Companies.Type_Id Left Join Subscriptions On Companies.Id = (Select Subscriptions.Company_Id From Subscriptions Where Subscriptions.Company_Id = Companies.Id Limit 1)";

                String[] columns = {
                                "Action",
                                "Company",
                                "Company Type",
                                "Start Date",
                                "End Date",
                                "Subscribed Time",
                                "Description",
                                "Method",
                                "Amount"
                };
                HashMap<String, String> mapping = new HashMap<>(4);
                mapping.put("Company Type", "Company_Types.Type");
                mapping.put("Start Date", "Subscriptions.Start_Date");
                mapping.put("End Date", "Subscriptions.End_Date");
                mapping.put("Subscribed Time", "Subscriptions.Time");
                for (int i = 0; i < params.filterColumn.length; i++) {
                        params.filterColumn[i] = mapping.getOrDefault(params.filterColumn[i], params.filterColumn[i]);
                }
                SqlCriteria customCriteria = new SqlCriteria(
                                "Companies.Id Not In (Select Company_Id From Subscriptions Where ? Between Start_Date And End_Date)",
                                time);
                SqlCriteria criteria = SqlUtil.constructCriteria(params, customCriteria, true);
                SqlCriteria filter = SqlUtil.constructCriteria(params, customCriteria);

                return Handler.toDataGrid(
                                new SqlQuery(sql, criteria),
                                new SqlQuery(count, filter),
                                columns);
        }
}
